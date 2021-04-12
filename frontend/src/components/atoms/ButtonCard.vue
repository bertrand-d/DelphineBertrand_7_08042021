<script>
  export default {
    name: 'ButtonCard',
    props: ['text', 'url']
  }
</script>

<template>
  <a :href="url">
    <div class = "button-card" >
      <p class = "button-card__text">{{ text }}</p>
    </div>
  </a>
</template>

<style lang="scss">
  .button-card {
    background-color: $primary-color;
    height: 50px;
    border-radius: 0px 0px 20px 20px;
    line-height: 50px;
    transition: background-color ease-in-out 0.25s;
    margin: 0 -20px -20px -20px;

      &:hover {
        background-color: darken($primary-color, 10%);
      }

      &__text {
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        line-height: 50px;
        font-weight: $font-weight-bold;
        color: white;
       }
  }
</style>
