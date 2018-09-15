<template>
  <v-layout>
    <v-flex lg3 offset-lg2>
      <v-text-field
        v-model="email"
        placeholder="Digite seu e-mail"
        solo
        append-icon="fa-arrow-right"
        v-bind="{ loading }"
        @click:append="sendEmail"
        id="email-input"
      >
      </v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EmailField',
  data: () => ({
    loading: false,
    email: ''
  }),
  methods: {
    sendEmail () {
      console.log(this.email)
    }
  }
}
</script>
