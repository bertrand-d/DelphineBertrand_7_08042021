<script>
export default {
	name: 'Connexion'
}
</script>

<template>
  <div class="connexion">
    <form id="connexion__form">
      <input id="email" type="email" name="email" />
      <input id="password" type="password" name="password" />
    </form>
    <button class="connexion__button" type="button" form="connexion__form"> Connexion </button>
  </div>
</template>

<style lang="scss">
  .connexion__button {
    color: $primary;
  }
</style>
