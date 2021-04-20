<script>

import LoginBox from '../components/organisms/LoginBox.vue'
import Logo from '../components/atoms/Logo.vue'

export default {
  name: 'Home',
  components: {
    LoginBox,
    Logo
  }
}
</script>

<template>
  <div class="home__container">
    <div class="home__logo">
      <Logo src="icon-above-font.png"></Logo>
    </div>
      <LoginBox></LoginBox>
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