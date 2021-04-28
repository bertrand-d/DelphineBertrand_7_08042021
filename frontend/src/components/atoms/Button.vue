<script>
export default {
  name: "ButtonCard",
  props: ["text"],
  methods: {
    emitCustomEvent() {
      this.$emit('click')
    }
  }
};
</script>

<template>
    <button class="button" @click.prevent="emitCustomEvent">
      <span class="button__text">{{ text }}</span>
    </button>
</template>

<style lang="scss">
.button {
  cursor: pointer;
  background-color: $primary-color;
  height: 80px;
  border-radius: 20px;
  transition: background-color ease-in-out 0.25s;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &__text {
    display: block;
    text-align: center;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    color: white;
  }
}
</style>
