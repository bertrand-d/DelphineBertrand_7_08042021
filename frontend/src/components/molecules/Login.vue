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
    <div class= "login-container">
        <Input type ="email" name="email" placeholder="e-mail"/>
        <Input type ="password" name="password" placeholder="mot de passe"/>
        <TextLink url="/" text= "mot de passe oublié"/>
        <TextLink url="/" text= "créer un compte"/>
        <ButtonCard class="test" url ="/" text="connexion"/>
    </div>
 
</template>

<style lang="scss">
  .login-container {
    width: 300px;
    padding: $padding-m;
    border-radius: $border-radius-m;
    box-shadow: $blur-shadow;
  }

</style>
