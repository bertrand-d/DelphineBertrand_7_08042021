<script>

import SigninBox from '../components/organisms/SigninBox.vue'
import Logo from '../components/atoms/Logo.vue'
import router from '../router'

export default {
  name: 'Signin',
  components: {
    SigninBox,
    Logo
  },
   beforeMount() {
    if(sessionStorage.getItem("userId") && sessionStorage.getItem("token")) {
      console.log("user is logged in");
      router.push("NewsFeed");
    }
  }
}
</script>

<template>
  <div id="signin">
    <div class="signin__logo">
      <Logo src="icon-above-font.png"></Logo>
    </div>
      <SigninBox></SigninBox>
  </div>
</template>

<style>
#signin {
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