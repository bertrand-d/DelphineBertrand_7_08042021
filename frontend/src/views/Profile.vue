<script>

import NavBar from '../components/organisms/NavBar.vue'
import Tooltip from '../components/atoms/Tooltip.vue'

export default {
  name: 'Profile',
  components: {
    NavBar,
    Tooltip
  }
}
</script>

<template>
<div>
    <NavBar></NavBar>
    <Tooltip text="coucou"></Tooltip>
</div>
</template>

<style lang='scss'>

</style>