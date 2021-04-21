<script>
const axios = require("axios").default;
import ButtonCard from "../atoms/ButtonCard.vue";
import Input from "../atoms/Input.vue";
import TextLink from "../atoms/TextLink.vue";

export default {
  name: "Login",
  components: {
    ButtonCard,
    Input,
    TextLink,
  },
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    sendPost() {
      const postData = { email: this.email, password: this.password };
      if (this.email.length === 0 || this.password.length === 0) {
        return console.log("merci de compléter ce champ");
      }
      axios
        .post("http://localhost:3000/api/auth/login", postData)
        .then((res) => {
          console.log(res.body);
        });
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
      <p class="login__alert" v-if="email.length===0">Merci de compléter ce champ</p>
      <Input
        class="login__input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
        v-model="password"
      />
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
}
</style>
