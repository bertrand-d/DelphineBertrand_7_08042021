<script>
import NavBar from "../components/organisms/NavBar.vue";
import PictureProfile from "../components/atoms/PictureProfile.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    PictureProfile
  },
};
</script>

<template>
  <div id="profile">
    <NavBar></NavBar>
    <PictureProfile src="walter.jpg"></PictureProfile>
  </div>
</template>

<style lang='scss'>
</style>