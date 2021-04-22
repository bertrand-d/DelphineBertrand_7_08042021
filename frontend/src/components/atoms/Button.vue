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
    <div class="button" @click="emitCustomEvent">
      <p class="button__text">{{ text }}</p>
    </div>
</template>

<style lang="scss">
.button {
  cursor: pointer;
  background-color: $primary-color;
  height: 80px;
  border-radius: 20px;
  line-height: 80px;
  transition: background-color ease-in-out 0.25s;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &__text {
    text-align: center;
    text-transform: uppercase;
    line-height: 80px;
    font-weight: $font-weight-bold;
    color: white;
  }
}
</style>
