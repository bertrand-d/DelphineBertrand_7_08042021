<script>
  export default {
    name: 'Input',
    props: ['type', 'name', 'placeholder']
  }
</script>

<template>
    <input class= "input" :type="type" :name="name" :placeholder="placeholder" required/>
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