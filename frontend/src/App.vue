<script>
import ButtonCard from './components/ButtonCard.vue'
import Input from './components/Input.vue'

export default {
	name: 'App',
	components: {
		ButtonCard,
		Input
	}
}
</script>

<template>
  <div id="app">
	<ButtonCard url="/" text ="Connexion"/>
	<Input type="text" name="nom" placeholder="Nom" />
  </div>
</template>