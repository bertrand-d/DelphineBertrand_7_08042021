<script>

import Login from '../components/organisms/Login.vue'
import Logo from '../components/atoms/Logo.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Logo
  }
}
</script>

<template>
  <div class="home__container">
    <div class="home__logo">
      <Logo></Logo>
    </div>
      <Login></Login>
  </div>
</template>

<style>
.home__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo {
  max-width: 300px;
}
</style>