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
      console.log(this.email)
      const postData = { email: this.email, password: this.password };
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
      <Input
        class="login__input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
        v-model="password"
      />
      <div class="login__body-container">
        <TextLink
          class="login__text-link"
          url="signin"
          text="Mot de passe oublié"
        />
        <div class="login__spacer"></div>
        <TextLink
          class="login__text-link"
          url="signin"
          text="Créer un compte"
        />
      </div>
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

  &__body {
    padding: 40px 20px;
  }
}

.login__body-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
}

.login__spacer {
  height: 50px;
  border-right: solid 1px #e6dede;
}

.login__input {
  margin-bottom: 20px;
}

.login__text-link {
  width: 80px;
}
</style>
