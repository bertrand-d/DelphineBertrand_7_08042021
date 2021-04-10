<script>
import ButtonCard from './components/ButtonCard.vue'
import Input from './components/Input.vue'
import TextLink from './components/TextLink.vue'

export default {
	name: 'App',
	components: {
		ButtonCard,
		Input,
		TextLink
	}
}
</script>

<template>
  <div id="app">
	<ButtonCard url="/" text ="Connexion"/>
	<Input type="text" name="nom" placeholder="Nom" />
	<TextLink url="/" text="Créer un compte"/>
  </div>
</template>