<script>
const axios = require("axios").default;
//components
import PictureProfile from "../components/atoms/PictureProfile.vue";
import Button from "../components/atoms/Button.vue";
import Input from "../components/atoms/Input.vue";
import InputDate from "../components/atoms/InputDate.vue";
import NavBar from "../components/organisms/NavBar.vue";
//fonction générique
import validateInput from "../utils/validateInput.js";
//routeur
import router from "../router/index.js";

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
      errors: {
        hasEmpty: false,
        emptyNom: false,
        emptyPrenom: false,
        emptyVille: false,
        emptyDate: false,
        badValueNom: false,
        badValuePrenom: false,
        badValueVille: false,
        badValueDate: false,
      },
      user: {},
      nom: "",
      prenom: "",
      date_naissance: "",
      ville: "",
    };
  },
  //get user
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      //method use when DOM is mounted and when user informations are updated
      const userId = sessionStorage.getItem("userId");
      const token = sessionStorage.getItem("token");
      axios
        .get("http://localhost:3000/api/auth/profile/" + userId, {
          headers: { authorization: "Bearer " + token },
        })
        .then((response) => {
          this.user = response.data.user;
          this.nom = this.user.nom;
          this.prenom = this.user.prenom;
          this.date_naissance = this.user.date_naissance;
          this.ville= this.user.ville;
          this.avatar_url = this.user.avatar_url;
        });
    },
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
      this.errors.emptyNom = false;
      this.errors.emptyPrenom = false;
      this.errors.emptyDate = false;
      this.errors.emptyVille = false;
      this.errors.badValueNom = false;
      this.errors.badValuePrenom = false;
      this.errors.badValueDate = false;
      this.errors.badValueVille = false;
    },
    isFormError() {
      if (!this.nom) {
        this.errors.emptyNom = true;
      } else {
        this.errors.emptyNom = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkOnlyLetters(this.nom)) {
        this.errors.badValueNom = true;
      } else {
        this.errors.badValueNom = false; //drop error message if user correct the answer
      }

      if (!this.prenom) {
        this.errors.emptyPrenom = true;
      } else {
        this.errors.emptyPrenom = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkOnlyLetters(this.prenom)) {
        this.errors.badValuePrenom = true;
      } else {
        this.errors.badValuePrenom = false; //drop error message if user correct the answer
      }

      if (!this.date_naissance) {
        this.errors.emptyDate = true;
      } else {
        this.errors.emptyDate = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkDate(this.date_naissance)) {
        this.errors.badValueDate = true;
      } else {
        this.errors.badValueDate = false; //drop error message if user correct the answer
      }

      if (!this.ville) {
        this.errors.emptyVille = true;
      } else {
        this.errors.emptyVille = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkOnlyLetters(this.ville)) {
        this.errors.badValueVille = true;
      } else {
        this.errors.badValueVille = false; //drop error message if user correct the answer
      }

      if (
        this.errors.emptyNom ||
        this.errors.emptyPrenom ||
        this.errors.emptyDate ||
        this.errors.emptyVille ||
        this.errors.badValueNom ||
        this.errors.badValuePrenom ||
        this.errors.badValueDate ||
        this.errors.badValueVille
      ) {
        console.log("erreur dans le login");
        return true;
      }
      return false;
    },
    sendValid() {
      if (this.modes.edit) {
        if (this.isFormError() === true) {
          return;
        }
        const postData = {
          nom: this.nom,
          prenom: this.prenom,
          date_naissance: this.date_naissance,
          ville: this.ville,
        };

        const userId = sessionStorage.getItem("userId");
        const token = sessionStorage.getItem("token");
        axios
          .put("http://localhost:3000/api/auth/profile/" + userId, postData, {
          headers: { authorization: "Bearer " + token },
          })
          .then(() => {
            this.modes.read = true;
            this.modes.edit = false;
            this.modes.readButton = true;
            this.modes.editButton = true;
            this.getInfo();
          });
        return false;
      } else if (this.modes.delete) {
        const userId = sessionStorage.getItem("userId");
        const token = sessionStorage.getItem("token");
        axios
          .delete("http://localhost:3000/api/auth/profile/" + userId, {
            headers: { authorization: "Bearer " + token },
          })
          .then((response) => {
            console.log(response)
            //redirection vers le login
            router.push("/");
          });
      }
    },
  },
};
</script>

<template>
  <div id="profile-view">
    <NavBar />
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
          <p
            class="profile__information__user-alert"
            v-if="this.errors.emptyPrenom"
          >
            * Merci de compléter ce champ
          </p>
          <p
            class="profile__information__user-alert"
            v-else-if="this.errors.badValuePrenom"
          >
            * Merci de renseigner un prénom valide
          </p>
          <Input
            class="profile__information__user-input-name"
            v-if="modes.edit"
            type="text"
            name="nom"
            placeholder="Nom"
            required
            v-model="nom"
          />
          <p
            class="profile__information__user-alert"
            v-if="this.errors.emptyNom"
          >
            * Merci de compléter ce champ
          </p>
          <p
            class="profile__information__user-alert"
            v-else-if="this.errors.badValueNom"
          >
            * Merci de renseigner un nom valide
          </p>
          <div class="profile__information__user-spacer"></div>
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.age }} ans
          </p>
          <InputDate
            class="profile__information__user-date"
            v-if="modes.edit"
            v-model="date_naissance"
          />
          <p
            class="profile__information__user-alert"
            v-if="this.errors.emptyDate"
          >
            * Merci de compléter ce champ
          </p>
          <p
            class="profile__information__user-alert"
            v-else-if="this.errors.badValueDate"
          >
            * Merci de renseigner une date de naissance valide
          </p>
          <div class="profile__information__user-spacer"></div>
          <p v-if="modes.read" class="profile__information__user-text">
            {{ user.ville }}
          </p>
          <Input
            class="profile__information__user-input-name"
            v-if="modes.edit"
            type="text"
            name="ville"
            placeholder="Ville"
            required
            v-model="ville"
          />
          <p
            class="profile__information__user-alert"
            v-if="this.errors.emptyVille"
          >
            * Merci de compléter ce champ
          </p>
          <p
            class="profile__information__user-alert"
            v-else-if="this.errors.badValueVille"
          >
            * Merci de renseigner une ville valide
          </p>
        </div>
      </div>
      <div class="profile__action">
        <p v-if="modes.delete" class="profile__action__text">
          Etes vous sûr de vouler supprimer votre compte ?<br />
          Cette action est irréversible
        </p>
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
    flex-basis: 0;

    &__img {
      width: 250px;
      height: 250px;
    }

    .profile__information__user {
      margin: auto;
      text-align: center;
      width: 60%;

      &-text {
        text-transform: capitalize;
      }

      &-date {
        height: 40px;
        margin-bottom: 20px;
      }

      &-spacer {
        width: 0;
        margin: 0px auto 10px auto;
        height: 25px;
        border-right: solid 1px black;
      }

      &-input-name {
        margin-bottom: 20px;
      }

      &-alert {
        @extend .alert-msg;
        position: relative;
        margin-top: -15px;
        margin-bottom: 20px;
      }
    }
  }
  .profile__action {
    &__text {
      @extend .alert-msg;
      margin-bottom: 20px;
    }
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