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
    background: $primary-color;
    height: 50px;
    border-radius: 0px 0px $border-radius-m $border-radius-m;
    line-height: 50px;
  }

  .button-card__text {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    line-height: 50px;
    font-weight: $font-weight-bold;
    color: white;
  }
</style>
