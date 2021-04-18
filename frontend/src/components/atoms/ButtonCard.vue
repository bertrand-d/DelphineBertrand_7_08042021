<script>
export default {
  name: "ButtonCard",
  props: ["text", "url"],
};
</script>

<template>
  <router-link :to="url">
    <div class="button-card">
      <p class="button-card__text">{{ text }}</p>
    </div>
  </router-link>
</template>

<style lang="scss">
.button-card {
  background-color: $primary-color;
  height: 50px;
  border-radius: 0px 0px 20px 20px;
  line-height: 50px;
  transition: background-color ease-in-out 0.25s;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &__text {
    text-align: center;
    text-transform: uppercase;
    line-height: 50px;
    font-weight: $font-weight-bold;
    color: white;
  }
}
</style>
