<script>
const axios = require("axios").default;
//composants
import PictureProfile from "../components/atoms/PictureProfile.vue";
import NavBar from "../components/organisms/NavBar.vue";
import Button from "../components/atoms/Button.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    PictureProfile,
    Button,
  },
  data: function () {
    return {
      user :null,
      email: "",
      password: "",
    };
  },
  beforeMount() {
    const userId = sessionStorage.getItem("userId");
    axios
      .get("http://localhost:3000/api/auth/profile/" + userId)
      .then((response) => {
        this.user = response.data.user;
      });
  },
};
</script>

<template>
  <div id="profileView">
    <NavBar></NavBar>
    <section class="profile">
      <div class="profile-information__container">
        <PictureProfile class="profile__img" src="walter.jpg"></PictureProfile>
        <div class="profile-text__container">
          <p class="profile-text__text">
            {{ user.nom }}
          </p>
          <div class="profile-text__spacer"></div>
          <p class="profile-text__text">test</p>
          <div class="profile-text__spacer"></div>
          <p class="profile-text__text">test</p>
        </div>
      </div>
      <Button class="profile__button" text="Supprimer mon profil"></Button>
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

  &__img {
    width: 250px;
    height: 250px;
  }

  &__button {
    flex-grow: 1;
    min-width: 250px;
  }
}

.profile-information__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
}

.profile-text__container {
  margin: auto;
  text-align: center;
}

.profile-text__spacer {
  width: 0;
  margin: 10px auto;
  height: 25px;
  border-right: solid 1px black;
}
</style>