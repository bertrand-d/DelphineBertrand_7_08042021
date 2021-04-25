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
      user: {},
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
        console.log("this", this.user);
      });
  },
};
</script>

<template>
  <div id="profile-view">
    <NavBar></NavBar>
    <section class="profile">
      <div class="profile-information">
        <PictureProfile
          class="profile-information__img"
          src="walter.jpg"
        ></PictureProfile>
        <div class="profile-information__user">
          <p class="profile-information__user__text">
            {{ user.prenom + " " + user.nom }}
          </p>
          <div class="profile-information__user__spacer"></div>
          <p class="profile-information__user__text">{{ user.age }} ans</p>
          <div class="profile-information__user__spacer"></div>
          <p class="profile-information__user__text">{{ user.ville }}</p>
        </div>
      </div>
      <div class="profile__action">
        <Button class="profile__button--edit" text="Editer mon profil"></Button>
        <Button class="profile__button" text="Supprimer mon profil"></Button>
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

  &__button {
    flex-grow: 1;
    flex-basis: 0;
    min-width: 250px;
  }
}

.profile-information {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;

  &__img {
    width: 250px;
    height: 250px;
  }
}

.profile-information__user {
  margin: auto;
  text-align: center;

  &__text {
    text-transform: capitalize;
  }

  &__spacer {
    width: 0;
    margin: 10px auto;
    height: 25px;
    border-right: solid 1px black;
  }
}
</style>