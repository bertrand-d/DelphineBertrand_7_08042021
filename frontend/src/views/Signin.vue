<script>

import SigninBox from '../components/organisms/SigninBox.vue'
import Logo from '../components/atoms/Logo.vue'

export default {
  name: 'Signin',
  components: {
    SigninBox,
    Logo
  }
}
</script>

<template>
  <div class="signin__container">
    <div class="signin__logo">
      <Logo></Logo>
    </div>
      <SigninBox></SigninBox>
  </div>
</template>

<style>
.signin__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.signin__logo {
  margin: auto;
  max-width: 300px;
}
</style>