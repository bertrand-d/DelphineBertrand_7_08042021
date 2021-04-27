<script>
export default {
  name: "Input",
  props: ["type", "name", "placeholder", "required", "value"],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    v-model="inputVal"
  />
</template>

<style lang="scss">
.input {
  width: 100%;
  height: 40px;
  border: solid 2px #e6dede;
  padding-left: 20px;
  border-radius: 15px;

  &::placeholder {
    opacity: 100%;
  }
}
</style>