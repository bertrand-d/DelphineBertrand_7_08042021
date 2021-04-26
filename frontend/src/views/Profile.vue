<script>
const axios = require("axios").default;
//components
import PictureProfile from "../components/atoms/PictureProfile.vue";
import NavBar from "../components/organisms/NavBar.vue";
import Button from "../components/atoms/Button.vue";
import Input from "../components/atoms/Input.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    PictureProfile,
    Button,
    Input,
  },
  data: function () {
    return {
      modes: {
        read: true,
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
    },
    abort() {
      this.modes.read = true;
      this.modes.edit = false;
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
          <div class="profile__information__user-input-name">
            <Input
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
          </div>
          <div class="profile__information__user-spacer"></div>
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.age }} ans
          </p>
          <div v-if="modes.edit" class="signin__body__input-date-container">
            <!--This div contain hack for the input date of birth-->
            <Input
              class="signin__body__input-date"
              type="date"
              name="date-of-birth"
              v-model="date_naissance"
              onblur="window.setValue(this.value)"
            />
            <Input
              class="placeholder-date signin__input-date"
              id="placeholder-date"
              value="Date de naissance"
              type="text"
            />
          </div>
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
          v-if="modes.read"
          class="profile__action__button--edit"
          text="Editer mon profil"
          @click="editMode()"
        />
        <Button
          v-if="modes.edit"
          class="profile__action__button--edit"
          text="Annuler"
          @click="abort()"
        />
        <Button
          class="profile__action__button"
          text="Supprimer mon profil"
          @click="sendDelete()"
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

      &-spacer {
        width: 0;
        margin: 10px auto;
        height: 25px;
        border-right: solid 1px black;
      }

      &-input-name {
        display: flex;
        flex-wrap: wrap;
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