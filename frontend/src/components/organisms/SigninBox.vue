<script>
const axios = require("axios").default;
//composant
import ButtonCard from "../atoms/ButtonCard.vue";
import InputDate from "../atoms/InputDate.vue";
import Input from "../atoms/Input.vue";
import TextLink from "../atoms/TextLink.vue";
//fonction générique
import validateInput from "../../utils/validateInput.js";
//routeur
import router from "../../router/index.js";

export default {
  name: "SigninBox",
  components: {
    ButtonCard,
    Input,
    InputDate,
    TextLink,
  },
  data: function () {
    return {
      errors: {
        emptyNom: false,
        emptyPrenom: false,
        emptyVille: false,
        emptyDate: false,
        emptyEmail: false,
        emptyPassword: false,
        badValueNom: false,
        badValuePrenom: false,
        badValueVille: false,
        badValueDate: false,
        badValueEmail: false,
        badValuePassword: false,
      },
      nom: "",
      prenom: "",
      date_naissance: "",
      ville: "",
      email: "",
      password: "",
    };
  },
  methods: {
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

      if (!this.email) {
        this.errors.emptyEmail = true;
      } else {
        this.errors.emptyEmail = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkEmail(this.email)) {
        this.errors.badValueEmail = true;
      } else {
        this.errors.badValueEmail = false; //drop error message if user correct the answer
      }

      if (!this.password) {
        this.errors.emptyPassword = true;
      } else {
        this.errors.emptyPassword = false; //drop error message if user correct the answer
      }

      if (!validateInput.checkPassword(this.password)) {
        this.errors.badValuePassword = true;
      } else {
        this.errors.badValuePassword = false; //drop error message if user correct the answer
      }

      if (
        this.errors.emptyNom ||
        this.errors.emptyPrenom ||
        this.errors.emptyDate ||
        this.errors.emptyVille ||
        this.errors.emptyEmail ||
        this.errors.emptyPassword ||
        this.errors.badValueNom ||
        this.errors.badValuePrenom ||
        this.errors.badValueDate ||
        this.errors.badValueVille ||
        this.errors.badValueEmail ||
        this.errors.badValuePassword
      ) {
        console.log("erreur dans le login");
        return true;
      }
      return false;
    },
    sendPost() {
      if (this.isFormError() === true) {
        return;
      }
      const postData = {
        nom: this.nom,
        prenom: this.prenom,
        date_naissance: this.date_naissance,
        ville: this.ville,
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:3000/api/auth/signin", postData)
        .then(function (response) {
          console.log(postData);
          console.log(response);
          //redirection vers le login
          router.push("/");
        });
    },
  },
};
</script>

<template>
  <form class="signin">
    <div class="signin__body">
      <div class="signin__body__input-container">
        <div class="signin__body__input-column">
          <Input
            class="signin__body__input"
            type="text"
            name="nom"
            placeholder="Nom"
            required
            v-model="nom"
          />
          <p class="signin__body__alert" v-if="errors.emptyNom">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValueNom">
            * Merci de renseigner un nom valide
          </p>
          <Input
            class="signin__body__input"
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
            v-model="prenom"
          />
          <p class="signin__body__alert" v-if="errors.emptyPrenom">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValuePrenom">
            * Merci de renseigner un prénom valide
          </p>

          <InputDate v-model="date_naissance"/>
          <p class="signin__body__alert" v-if="errors.emptyDate">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValueDate">
            * Merci de renseigner une date de naissance valide
          </p>
        </div>
        <div class="signin__body__input-column">
          <Input
            class="signin__body__input"
            type="text"
            name="ville"
            placeholder="Ville"
            required
            v-model="ville"
          />
          <p class="signin__body__alert" v-if="errors.emptyVille">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValueVille">
            * Merci de renseigner une ville valide
          </p>
          <Input
            class="signin__body__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            v-model="email"
          />
          <p class="signin__body__alert" v-if="errors.emptyEmail">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValueEmail">
            * Merci de renseigner une adresse mail valide
          </p>
          <Input
            class="signin__body__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            v-model="password"
          />
          <p class="signin__body__alert" v-if="errors.emptyPassword">
            * Merci de compléter ce champ
          </p>
          <p class="signin__body__alert" v-else-if="errors.badValuePassword">
            * Merci de renseigner un mot de passe de 8 caractères, ne contenant
            que des lettres et / ou des chiffres
          </p>
        </div>
      </div>
      <TextLink
        class="signin__body__text-link"
        url="/"
        text="J'ai déjà un compte"
      />
    </div>
    <ButtonCard text="inscription" type="submit" @click="sendPost()" />
  </form>
</template>

<style lang="scss">
.signin {
  max-width: 650px;
  border-radius: $border-radius-m;
  box-shadow: $net-shadow;
  background-color: white;
  text-align: center;

  &__body {
    padding: 40px 20px 20px 20px;
    margin-right: -20px;

    &__input-container {
      display: flex;
      flex-wrap: wrap;
    }

    &__input-column {
      margin-right: 20px;
      flex-grow: 1;
      flex-basis: 0;
      min-width: 150px;
    }

    &__input {
      margin-bottom: 20px;
    }

    &__text-link {
      margin-right: 20px;
    }

    &__alert {
      @extend .alert-msg;
      position: relative;
      margin-top: -15px;
      margin-bottom: 20px;
    }
  }
}

//========== hack for input date of birth ===========
.signin__body__input-date-container {
  position: relative;
  height: 60px; //this height allow to align alert message to other messages
}
.signin__body__input-date {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.signin__body__input-date[type="date"],
.signin__body__input-date[type="date"]:focus {
  z-index: 1;
  color: transparent;
  background: transparent;
  border: none;
}
.signin__body__input-date[type="date"]:focus {
  z-index: 1;
  color: black;
}
.signin__body__input-date[type="date"]:focus + .placeholder-date {
  display: none;
}
//===========end===========
</style>
