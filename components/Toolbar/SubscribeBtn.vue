<template>
  <v-btn
    class="font-weight-bold subheading"
    color="primary"
    dark
    @click="focusEmailInput"
  >
    Quero usar
    <v-icon right small>fa-arrow-right</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'SubscribeBtn',
  methods: {
    focusEmailInput () {
      const emailInput = document.querySelector('#email-input')
      emailInput.focus()
      this.$vuetify.goTo(emailInput)
      this.$emit('click')
    }
  }
}
</script>
