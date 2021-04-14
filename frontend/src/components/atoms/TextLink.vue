<script>
  export default {
    name: 'TextLink',
    props: ['text', 'url']
  }
</script>

<template>
<router-link class="text-link" :to="url">{{ text }}</router-link>
</template>

<style lang="scss">
  .text-link {
    font-size: 0.8rem;
    color: $tertiary-color;
    font-weight: $font-weight-bold;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: darken($tertiary-color, 20%);
    }
  }
</style>
