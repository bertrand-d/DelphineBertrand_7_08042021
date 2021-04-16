<script>
import LogoLeft from '../atoms/LogoLeft.vue'
import Icon from '../molecules/Icon.vue'

export default {
  name: 'NavBar',
  components: {
    LogoLeft,
    Icon
  }
}
</script>

<template>
    <nav>
        <LogoLeft></LogoLeft>
        <ul>
            <li><Icon></Icon></li>
            <li></li>
        </ul>
    </nav>
</template>

<style lang="scss">

</style>
