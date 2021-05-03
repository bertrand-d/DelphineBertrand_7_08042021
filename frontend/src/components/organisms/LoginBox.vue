<script>
const axios = require("axios").default;
//composants
import ButtonCard from "../atoms/ButtonCard.vue";
import Input from "../atoms/Input.vue";
import TextLink from "../atoms/TextLink.vue";
//routeur
import router from "../../router/index.js";
//fonction générique
import validateInput from "../../utils/validateInput.js";

export default {
  name: "Login",
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
        unauthorized: false,
        unknown: false,
      },
      email: "",
      password: "",
    };
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
      if (this.isFormError()) {
        return;
      }
      this.errors.unauthorized = false;
      this.errors.unknown = false;
      const postData = { email: this.email, password: this.password };

      axios
        .post("http://localhost:3000/api/auth/login", postData)
        .then(function (response) {
          sessionStorage.setItem("userId", response.data.userId);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("role", response.data.role);
          //redirection vers le newsfeed
          router.push({ name: "Newsfeed" });
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.errors.unauthorized = true;
          } else {
            this.errors.unknown = true;
          }
        });
    },
  },
};
</script>

<template>
  <form class="login">
    <div class="login__body">
      <Input
        class="login__body__input"
        type="email"
        name="email"
        placeholder="E-mail"
        required
        v-model="email"
      />
      <p class="login__body__alert" v-if="errors.emptyEmail">
        * Merci de compléter ce champ
      </p>
      <p class="login__body__alert" v-else-if="errors.badValueEmail">
        * Merci de renseigner une adresse mail valide
      </p>
      <Input
        class="login__body__input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
        v-model="password"
      />
      <p class="login__body__alert" v-if="errors.emptyPassword">
        * Merci de compléter ce champ
      </p>
      <p class="login__body__alert" v-else-if="errors.badValuePassword">
        * Merci de renseigner un mot de passe contenant 8 caractères
      </p>
      <p class="login__body__alert" v-if="errors.unauthorized">
        * Email ou mot de passe invalide
      </p>
      <p class="login__body__alert" v-if="errors.unknown">
        * Une erreur est survenue, merci de réessayer plus tard
      </p>
      <TextLink url="signin" text="Créer un compte" />
    </div>
    <ButtonCard text="connexion" type="submit" @click="sendPost()" />
  </form>
</template>

<style lang="scss">
.login {
  max-width: 300px;
  border-radius: $border-radius-m;
  box-shadow: $net-shadow;
  background-color: white;
  text-align: center;

  &__body {
    padding: 40px 20px 20px 20px;

    &__input {
      margin-bottom: 20px;
    }

    &__alert {
      @extend .alert-msg;
      position: relative;
      margin-top: -15px;
      margin-bottom: 20px;
    }
  }
}
</style>
