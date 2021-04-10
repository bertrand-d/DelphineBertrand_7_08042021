<script>
  export default {
    name: 'TextLink',
    props: ['text', 'url']
  }
</script>

<template>
  <a class="text-link" :href="url"> {{ text }} </a>
</template>

<style lang="scss">
  .text-link {
    color: $tertiary-color;
    font-weight: $font-weight-bold;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: darken($tertiary-color, 20%);
    }
  }
</style>
