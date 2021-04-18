<script>
import NavBar from "../components/organisms/NavBar.vue";
import ProfileName from "../components/molecules/ProfileName.vue";
import Button from "../components/atoms/Button.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileName,
    Button
  },
};
</script>

<template>
  <div id="profile">
    <NavBar></NavBar>
    <div class="profile__container">
      <ProfileName text="Walter"></ProfileName>
      <Button text="Supprimer"></Button>
    </div>
  </div>
</template>

<style lang='scss'>
.profile__container {
  @extend .max-container;
  margin-top: 50px;
  padding: 20px 60px;
  border-radius: 20px;
  background-color:white;
}
</style>