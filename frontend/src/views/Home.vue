<script>

import Login from '../components/organisms/Login.vue'
import LogoTop from '../components/atoms/LogoTop.vue'

export default {
  name: 'Home',
  components: {
    Login,
    LogoTop
  }
}
</script>

<template>
  <div class="home__container">
    <div class="home__logo">
      <LogoTop></LogoTop>
    </div>
      <Login></Login>
  </div>
</template>

<style lang='scss'>
.home__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home__logo {
  max-width: 300px;
}
</style>