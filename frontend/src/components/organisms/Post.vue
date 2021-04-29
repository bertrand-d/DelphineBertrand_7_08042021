<script>
import PictureProfile from "../atoms/PictureProfile.vue";

export default {
  name: "Post",
  components: {
    PictureProfile,
  },
};
</script>

<template>
  <div class="post">
    <div class="post__header">
      <PictureProfile class="post__header__img" src="default-avatar.png" />
      <div>
        <p class="post__header__name">
          Jesse <span class="post__header__name--uppercase">Pinkman</span>
        </p>
        <p class="post__header__date">Le 15/04/2012</p>
      </div>
    </div>
    <div class="post__body">
      <p class="post__body__text">
        Mr White, c’est le diable. Tu sais, il est plus intelligent que toi, il
        est plus chanceux que toi. Peu importe ce que tu penses qu’il est
        supposé arriver, je te le dis, l’exact opposé de ça va se produire, ok ?
      </p>
      <div class="post__body__spacer"></div>
      <div class="post__body__comment">
        <i class="post__body__comment__icon far fa-comment"></i>
        <p class="post__body__comment__text">Commenter</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  padding: 20px;
  background-color: white;
  border-radius: $border-radius-m;
  border: solid 2px #e6dede;

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &__img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    &__name {
      font-weight: $font-weight-bold;
      margin-bottom: 5px;
    }

    &__name--uppercase {
      text-transform: uppercase;
    }
  }

  &__body {
    &__text {
      margin-bottom: 20px;
    }

    &__spacer {
      width: 100%;
      margin-bottom: 20px;
      border-bottom: solid 1px #e6dede;
    }

    &__comment {
      display: flex;
      align-items: center;

      &__icon {
        text-align: center;
        margin-right: 10px;
        margin-left : auto;
        font-size: 1.5rem;
        color: $secondary-color;
      }

      &__text {
          margin-right: auto;
          text-align: center;
      }
    }
  }
}
</style>
