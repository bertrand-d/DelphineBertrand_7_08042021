<script>
import PictureProfile from "../atoms/PictureProfile.vue";

export default {
  name: "ProfileName",
  components: {
    PictureProfile,
  },
  props: ['text']
};
</script>

<template>
  <div class="profile-name">
    <PictureProfile class="profile-name__img" src="walter.jpg"></PictureProfile>
    <div class="profile-name__container">
        <p class="profile-name__text">{{ text }}</p>
        <div class="spacer"></div>
        <p class="profile-name__text">{{ text }}</p>
        <div class="spacer"></div>
        <p class="profile-name__text">{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.profile-name {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
}

.profile-name__container {
    margin: auto;
}

.spacer {
    width: 0;
   margin: 10px auto;
    height: 25px;
    border-right: solid 1px black;
}

.profile-name__img {
    width: 250px;
    height: 250px;
}
</style>
