<script>
const axios = require("axios").default;
//composants
import NavBar from "../components/organisms/NavBar.vue";
import ProfileName from "../components/molecules/ProfileInfo.vue";
import Button from "../components/atoms/Button.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileName,
    Button,
  },
  data: function () {
    return {
      email: "",
      password: "",
    }
  },
  mounted() {
    const param = sessionStorage.getItem('userId');
    const userId = param.replace('?id=', '');

    axios
      .get('http://localhost:3000/api/auth/profile/' + userId)
      .then(response => (this.info = response))
  }
};
</script>

<template>
  <div id="profile">
    <NavBar></NavBar>
    <div class="profile__container">
      <ProfileName class="profile__name" text="Walter"></ProfileName>
      <Button class="profile__button" text="Supprimer mon profil"></Button>
    </div>
  </div>
</template>

<style lang='scss'>
.profile__container {
  @extend .max-container;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 20px 60px;
  border-radius: 20px;
  background-color: white;
  align-items: center;
}

.profile__name,
.profile__button {
  flex-grow: 1;
}

.profile__button {
  min-width: 250px;
}
</style>