<script>

import LoginBox from '../components/organisms/LoginBox.vue'
import Logo from '../components/atoms/Logo.vue'
import router from '../router'

export default {
  name: 'Home',
  components: {
    LoginBox,
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
  <div id ="home">
    <div class="home__logo">
      <Logo src="icon-above-font.png"></Logo>
    </div>
      <LoginBox></LoginBox>
  </div>
</template>

<style lang='scss'>
#home {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home__logo {
  max-width: 300px;
}
</style>