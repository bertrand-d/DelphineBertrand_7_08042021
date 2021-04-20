<script>
  export default {
    name: 'Input',
    props: ['type', 'name', 'placeholder', 'required', 'value'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<template>
    <input class= "input" :type="type" :name="name" :placeholder="placeholder" :required="required" :value="value" v-on:input="updateValue($event.target.value)"/>
</template>

<style lang="scss">
    .input {
        width: 100%;
        height: 40px;
        border: solid 2px #E6DEDE;
        padding-left: 20px;
        border-radius: 15px;

        &::placeholder{
            opacity: 100%;
        }
    }
</style>