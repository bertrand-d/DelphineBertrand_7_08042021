<script>
const axios = require("axios").default;
//composant
import ButtonCard from "../atoms/ButtonCard.vue";
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
    TextLink,
  },
  data: function () {
    return {
      errors: {
        emptyEmail: false,
        emptyPassword: false,
        badValueEmail: false,
        badValuePassword: false,
        onlyLetters: false,
      },
      nom: "",
      prenom: "",
      date_naissance: "",
      ville: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    window.setValue = function (val) {
      document.querySelector("#placeholder-date").value = val;
    }; //fonction permettant de récupérer la valeur du placeholder de la date de naissance
  },
  methods: {
    isFormError() {
      if (!this.email) {
        this.errors.emptyEmail = true;
      } else {
        this.errors.emptyEmail = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (!validateInput.checkEmail(this.email)) {
        this.errors.badValueEmail = true;
      } else {
        this.errors.badValueEmail = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (!this.password) {
        this.errors.emptyPassword = true;
      } else {
        this.errors.emptyPassword = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (!validateInput.checkPassword(this.password)) {
        this.errors.badValuePassword = true;
      } else {
        this.errors.badValuePassword = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (
        this.errors.emptyEmail ||
        this.errors.emptyPassword ||
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
      const postData = { email: this.email, password: this.password };

      axios
        .post("http://localhost:3000/api/auth/signin", postData)
        .then(function (response) {
          console.log(response);
        });
      //redirection vers le login
      router.push("Home");
    },
  },
};
</script>

<template>
  <div class="signin">
    <div class="signin__body">
      <div class="signin__body-container">
        <div class="signin__body-input-container">
          <Input
            class="signin__input"
            type="text"
            name="nom"
            placeholder="Nom"
            required
            v-model="nom"
          />
          <Input
            class="signin__input"
            type="text"
            name="prenom"
            placeholder="Prénom"
            required
            v-model="prenom"
          />

          <div class="signin__input-date-container">
            <Input
              class="signin__input-date"
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
        </div>
        <div class="signin__body-input-container">
          <Input
            class="signin__input"
            type="text"
            name="ville"
            placeholder="Ville"
            required
            v-model="ville"
          />
          <Input
            class="signin__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            v-model="email"
          />
          <p class="signin__alert" v-if="errors.emptyEmail">
            * Merci de compléter ce champ
          </p>
          <p class="signin__alert" v-else-if="errors.badValueEmail">
            * Merci de renseigner une adresse mail valide
          </p>
          <Input
            class="signin__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            v-model="password"
          />
        </div>
      </div>
      <TextLink class="signin__text-link" url="/" text="J'ai déjà un compte" />
    </div>
    <ButtonCard text="inscription" @click="sendPost()" />
  </div>
</template>

<style lang="scss">
.signin__input-date-container {
  position: relative;
}
.signin__input-date {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.signin__input-date[type="date"],
.signin__input-date[type="date"]:focus {
  z-index: 1;
  color: transparent;
  background: transparent;
  border: none;
}
.signin__input-date[type="date"]:focus {
  z-index: 1;
  color: black;
}
.signin__input-date[type="date"]:focus + .placeholder-date {
  display: none;
}

.signin {
  max-width: 650px;
  border-radius: $border-radius-m;
  box-shadow: $net-shadow;
  background-color: white;
  text-align: center;

  &__body {
    padding: 40px 20px 20px 20px;
    margin-right: -20px;
  }

  &__body-container {
    display: flex;
    flex-wrap: wrap;
  }

  &__body-input-container {
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
</style>
