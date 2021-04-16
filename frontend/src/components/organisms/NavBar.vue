<script>
import Logo from "../atoms/Logo.vue";
import Icon from "../atoms/Icon.vue";

export default {
  name: "NavBar",
  components: {
    Logo,
    Icon,
  },
};
</script>

<template>
<div class="navbar-background">
  <nav class="navbar">
    <div class="navbar__logo-container">
      <Logo src="icon-left-font.png"></Logo>
    </div>
    <ul class="navbar__list">
      <li class="navbar__list__icon">
        <Icon class="far fa-comment-alt"></Icon>
      </li>
      <li class="navbar__list__icon"><Icon class="far fa-user"></Icon></li>
    </ul>
  </nav>
</div>
</template>

<style lang="scss">

.navbar-background {
  background-color: $secondary-color;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
 @extend .max-container;

  &__logo-container {
    max-width: 230px;
  }

  &__list {
    display: flex;

    &__icon {
      margin-left: 30px;
    }
  }
}
</style>
