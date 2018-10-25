<template>
  <v-btn
    class="font-weight-bold subheading"
    color="primary"
    dark
    large
    href="https://app.easypub.com.br/#/auth/register"
    @click="focusEmailInput"
  >
    QUERO USAR
  </v-btn>
</template>

<script>
export default {
  name: 'SubscribeBtn',
  methods: {
    focusEmailInput () {
      this.$ga.event('SubscribeButton', 'click', 'Lead')
    }
  }
}
</script>
