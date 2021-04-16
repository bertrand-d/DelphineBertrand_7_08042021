<script>
  export default {
    name: 'Logo',
    props: ['src']
  }

</script>

<template>
    <img class="logo" :src="require(`@/assets/${src}`)" alt="logo de l'entreprise grouporama représentant une planète">
</template>

<style lang="scss">
    .logo {
        @extend .img-size;
    }
</style>