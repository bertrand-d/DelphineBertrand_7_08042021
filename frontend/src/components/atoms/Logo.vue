<script>
  export default {
    name: 'Logo',
    props: ['src']
  }

</script>

<template>
    <img class="logo" :src="require(`@/assets/${src}`)">
</template>

<style lang="scss">
    .logo {
        @extend .img-size;
    }
</style>