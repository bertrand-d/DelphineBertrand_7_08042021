<script>
import ButtonCard from '../atoms/ButtonCard.vue'
import Input from '../atoms/Input.vue'
import TextLink from '../atoms/TextLink.vue'

export default {
  name: 'Login',
  components: {
    ButtonCard,
    Input,
    TextLink
  }
}
</script>

<template>
    <div class= "login">
      <div class= "login__body">
        <Input class="login__input" type ="email" name="email" placeholder="E-mail"/>
        <Input class="login__input" type ="password" name="password" placeholder="Mot de passe"/>
        <div class ="login__body-container">
          <TextLink class="login__text-link" url="signin" text= "Mot de passe oublié"/>
          <div class= "login__spacer"></div>
          <TextLink class="login__text-link" url="signin" text= "Créer un compte"/>
        </div>
      </div>
        <ButtonCard url ="/" text="connexion"/>
    </div>
 
</template>

<style lang="scss">

  .login {
    max-width: 300px;
    border-radius: $border-radius-m;
    box-shadow: $blur-shadow;
    background-color: white;

    &__body {
    padding: 40px 20px;
    }
  }

  .login__body-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }

  .login__spacer {
    height: 50px;
    border-right: solid 1px #E6DEDE;
  }

  .login__input {
    margin-bottom: 20px;
  }

  .login__text-link {
    width: 80px;
  }

</style>
