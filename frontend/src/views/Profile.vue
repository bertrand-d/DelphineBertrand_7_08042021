<script>
const axios = require("axios").default;
//components
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
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/auth/profile/" + userId, {
        headers: { authorization: "Bearer " + token },
      })
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
      <div class="profile__information">
        <PictureProfile
          class="profile__information__img"
          src="default-avatar.png"
        ></PictureProfile>
        <div class="profile__information__user">
          <p class="profile__information__user-text">
            {{ user.prenom + " " + user.nom }}
          </p>
          <div class="profile__information__user-spacer"></div>
          <p class="profile__information__user-text">{{ user.age }} ans</p>
          <div class="profile__information__user-spacer"></div>
          <p class="profile__information__user-text">{{ user.ville }}</p>
        </div>
      </div>
      <div class="profile__action">
        <Button
          class="profile__action__button--edit"
          text="Editer mon profil"
        ></Button>
        <Button
          class="profile__action__button"
          text="Supprimer mon profil"
        ></Button>
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

    &__img {
      width: 250px;
      height: 250px;
    }

    .profile__information__user {
      margin: auto;
      text-align: center;

      &-text {
        text-transform: capitalize;
      }

      &-spacer {
        width: 0;
        margin: 10px auto;
        height: 25px;
        border-right: solid 1px black;
      }
    }
  }
  .profile__action {
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