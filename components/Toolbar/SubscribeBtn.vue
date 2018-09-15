<template>
  <v-btn
    class="font-weight-bold subheading"
    color="primary"
    dark
    @click="focusEmailInput"
  >
    Inscreva-se
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
      window.scrollY = 0
      this.$emit('click')
    }
  }
}
</script>
