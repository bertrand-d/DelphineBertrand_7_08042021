<script>
export default {
  name: "PictureProfile",
  props: ["src"],
};
</script>

<template>
  <div class="picture-profile">
    <img
      class="picture-profile__img"
      :src="require(`@/assets/${src}`)"
      alt="photo de profil de l'utilisateur"
    />
  </div>
</template>

<style lang="scss">
.picture-profile {
  border-radius: 100%;
  border: solid 4px $primary-color;
  overflow: hidden;
  
}

.picture-profile__img {
    @extend .img-size;
}
</style>