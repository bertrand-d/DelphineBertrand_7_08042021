<script>
const axios = require("axios").default;
import ButtonCard from "../atoms/ButtonCard.vue";
import Input from "../atoms/Input.vue";
import TextLink from "../atoms/TextLink.vue";

export default {
  name: "SigninBox",
  components: {
    ButtonCard,
    Input,
    TextLink,
  },
  data: function () {
    return {
      nom: "",
      prenom: "",
      date_naissance:"",
      ville: "",
      email: "",
      password: "",
    };
  },
  methods: {
    sendPost() {
      const postData = { nom: this.nom, prenom: this.prenom, date_naissance: this.date_naissance, ville: this.ville, email: this.email, password: this.password };
      axios
        .post("http://localhost:3000/api/auth/signin", postData)
        .then((res) => {
          console.log(res.body);
        });
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
          <Input
            class="signin__input"
            type="text"
            name="date-of-birth"
            placeholder="Date de naissance"
            required
            v-model="date_naissance"
          />
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
      <div class="signin__body-text-link-container">
        <TextLink url="/" text="J'ai déjà un compte" />
      </div>
    </div>
    <ButtonCard text="inscription" @click="sendPost()" />
  </div>
</template>

<style lang="scss">
.signin {
  max-width: 650px;
  border-radius: $border-radius-m;
  box-shadow: $net-shadow;
  background-color: white;
  text-align: center;

  &__body {
    padding: 40px 20px;
    margin-right: -20px;
  }
}

.signin__body-container {
  display: flex;
  flex-wrap: wrap;
}

.signin__body-input-container {
  margin-right: 20px;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 150px;
}

.signin__input {
  margin-bottom: 20px;
}

.signin__body-text-link-container {
  margin-top: 20px;
}
</style>
