<script>
const axios = require("axios").default;
//composants
import ButtonCard from "../atoms/ButtonCard.vue";
import Input from "../atoms/Input.vue";
import TextLink from "../atoms/TextLink.vue";
import router from '../../router/index.js'

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
        badValuePassword: false
      },
      email: "",
      password: "",
    };
  },
  methods: {
    checkEmail(email) {
      let re = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkPassword(password) {
      let re = /[a-zA-Z0-9]{8}/;
      return re.test(password);
    },
    isFormError() {
      if (this.email.length === 0) {
        this.errors.emptyEmail = true;
      } else {
        this.errors.emptyEmail = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }
      
      if (this.checkEmail(this.email) === false) {
        this.errors.badValueEmail = true;
      } else {
        this.errors.badValueEmail = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (this.password.length === 0) {
        this.errors.emptyPassword = true;
      } else {
        this.errors.emptyPassword = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (this.checkPassword(this.password) === false) {
        this.errors.badValuePassword = true;
      } else {
        this.errors.badValuePassword = false; //permet d'enlever le message d'erreur si l'utilisateur corrige le champ
      }

      if (this.errors.emptyEmail || this.errors.emptyPassword || this.errors.badValueEmail || this.errors.badValuePassword) {
        console.log('erreur dans le login');
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
        .post("http://localhost:3000/api/auth/login", postData)
        .then(function (response) {
          sessionStorage.setItem('userId', response.data.userId);
          console.log(response);
        });

      //redirection vers le profil utilisateur
      const userId = sessionStorage.getItem('userId');
      router.push({name: 'Profile', params: { id: userId}});
    },
  },
};
</script>

<template>
  <div class="login">
    <div class="login__body">
      <Input
        class="login__input"
        type="email"
        name="email"
        placeholder="E-mail"
        required
        v-model="email"
      />
      <p class="login__alert" v-if="errors.emptyEmail">
        * Merci de compléter ce champ
      </p>
      <p class="login__alert" v-else-if="errors.badValueEmail">
        * Merci de renseigner une adresse mail valide
      </p>
      <Input
        class="login__input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
        v-model="password"
      />
      <p class="login__alert" v-if="errors.emptyPassword">
        * Merci de compléter ce champ
      </p>
       <p class="login__alert" v-else-if="errors.badValuePassword">
        * Merci de renseigner un mot de passe contenant 8 caractères
      </p>
      <TextLink class="login__text-link" url="signin" text="Créer un compte" />
    </div>
    <ButtonCard text="connexion" @click="sendPost()" />
  </div>
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
  }

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
</style>
