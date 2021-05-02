<script>
import Logo from "../atoms/Logo.vue";
import Icon from "../atoms/Icon.vue";
import router from "../../router/index.js";

export default {
  name: "NavBar",
  components: {
    Logo,
    Icon,
  },
  methods: {
    disconnect() {
      sessionStorage.clear();
      router.push("/");
    },
  },
};
</script>

<template>
  <div class="navbar-background">
    <nav class="navbar">
      <div class="navbar__logo">
        <router-link to="/newsfeed" exact
          ><Logo src="icon-left-font.png"></Logo
        ></router-link>
      </div>
      <ul class="navbar__list">
        <li class="navbar__list__icon">
          <router-link to="/newsfeed" exact
            ><Icon class="far fa-comment-alt"></Icon
          ></router-link>
        </li>
        <li class="navbar__list__icon">
          <router-link to="/profile/:id"
            ><Icon class="far fa-user"></Icon
          ></router-link>
        </li>
        <li class="navbar__list__icon" @click="disconnect()">
          <Icon class="far fa-times-circle"></Icon>
        </li>
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
  padding: 0px 20px;
  align-items: center;
  @extend .max-container;

  &__logo {
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
