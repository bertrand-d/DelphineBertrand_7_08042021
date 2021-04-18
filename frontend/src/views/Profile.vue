<script>
import NavBar from "../components/organisms/NavBar.vue";
import ProfileName from "../components/molecules/ProfileName.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileName
  },
};
</script>

<template>
  <div id="profile">
    <NavBar></NavBar>
    <ProfileName></ProfileName>
  </div>
</template>

<style lang='scss'>
</style>