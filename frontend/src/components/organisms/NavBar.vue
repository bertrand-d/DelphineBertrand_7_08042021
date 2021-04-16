<script>
import Logo from '../atoms/Logo.vue'
import Icon from '../atoms/Icon.vue'

export default {
  name: 'NavBar',
  components: {
    Logo,
    Icon
  }
}
</script>

<template>
    <nav>
        <Logo src="icon-left-font.png"></Logo>
        <ul>
            <li><Icon class ="far fa-comment-alt"></Icon></li>
            <li></li>
        </ul>
    </nav>
</template>

<style lang="scss">

</style>
