<script>
const axios = require("axios").default;
//components
import PictureProfile from "../components/atoms/PictureProfile.vue";
import NavBar from "../components/organisms/NavBar.vue";
import Button from "../components/atoms/Button.vue";
import Input from "../components/atoms/Input.vue";
import InputDate from "../components/atoms/InputDate.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    PictureProfile,
    Button,
    Input,
    InputDate,
  },
  data: function () {
    return {
      modes: {
        read: true,
        readButton: true,
        editButton: true,
        edit: false,
        delete: false,
      },
      user: {},
      email: "",
      password: "",
    };
  },
  //get user
  beforeMount() {
    const userId = sessionStorage.getItem("userId");
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/auth/profile/" + userId, {
        headers: { authorization: "Bearer " + token },
      })
      .then((response) => {
        this.user = response.data.user;
        console.log("this", this.user);
      });
  },
  methods: {
    editMode() {
      this.modes.read = false;
      this.modes.edit = true;
      this.modes.readButton = false;
      this.modes.editButton = false;
    },
    deleteMode() {
      this.modes.delete = true;
      this.modes.readButton = false;
      this.modes.editButton = false;
    },
    abort() {
      this.modes.read = true;
      this.modes.edit = false;
      this.modes.delete = false;
      this.modes.readButton = true;
      this.modes.editButton = true;
    },
  },
};
</script>

<template>
  <div id="profile-view">
    <NavBar></NavBar>
    <section class="profile">
      <div class="profile__information">
        <PictureProfile
          class="profile__information__img"
          src="default-avatar.png"
        />
        <div class="profile__information__user">
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.prenom + " " + user.nom }}
          </p>
          <Input
            class="profile__information__user-input-name"
            v-if="modes.edit"
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
            v-model="prenom"
          />
          <Input
            v-if="modes.edit"
            type="text"
            name="nom"
            placeholder="Nom"
            required
            v-model="nom"
          />
          <div class="profile__information__user-spacer"></div>
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.age }} ans
          </p>
          <InputDate
            class="profile__information__user-date"
            v-if="modes.edit"
            v-model="date_naissance"
          />
          <div class="profile__information__user-spacer"></div>
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.ville }}
          </p>
          <Input
            v-if="modes.edit"
            type="text"
            name="ville"
            placeholder="Ville"
            required
            v-model="ville"
          />
        </div>
      </div>
      <div class="profile__action">
        <Button
          v-if="modes.editButton"
          class="profile__action__button--edit"
          text="Editer mon profil"
          @click="editMode()"
        />
        <Button
          v-if="modes.edit || modes.delete"
          class="profile__action__button--edit"
          text="Annuler"
          @click="abort()"
        />
        <Button
          v-if="modes.readButton"
          class="profile__action__button"
          text="Supprimer mon profil"
          @click="deleteMode()"
        />
        <Button
          v-if="modes.edit || modes.delete"
          class="profile__action__button"
          text="Valider"
          @click="sendValid()"
        />
      </div>
    </section>
  </div>
</template>

<style lang='scss'>
.profile {
  @extend .max-container;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 20px 60px;
  border-radius: 20px;
  background-color: white;
  align-items: center;

  .profile__information {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-grow: 1;

    &__img {
      width: 250px;
      height: 250px;
    }

    .profile__information__user {
      margin: auto;
      text-align: center;

      &-text {
        text-transform: capitalize;
      }

      &-date {
        height: 40px;
      }

      &-spacer {
        width: 0;
        margin: 10px auto;
        height: 25px;
        border-right: solid 1px black;
      }

      &-input-name {
        margin-bottom: 20px;
      }
    }
  }
  .profile__action {
    &__button--edit {
      background-color: $secondary-color;
      margin-bottom: 20px;
      transition: background-color ease-in-out 0.25s;

      &:hover {
        background-color: lighten($secondary-color, 15%);
      }
    }

    &__button {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 250px;
    }
  }
}
</style>