<template>
  <v-layout>
    <v-flex lg3 offset-lg2>
      <v-text-field
        v-model="email"
        placeholder="Digite seu e-mail"
        solo
        append-icon="fa-arrow-right"
        v-bind="{ loading, rules }"
        :success-messages="successMessages"
        :error-messages="errorMessages"
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
    email: '',
    successMessages: [],
    errorMessages: [],
    rules: [
      (v) => !!v || 'Não envie o campo em branco!'
    ]
  }),
  methods: {
    sendEmail () {
      this.loading = true
      this.errorMessages = []
      this.successMessages = []

      this
        .$firestore
        .collection('lead-emails').add({
          email: this.email
        })
        .then(this.sendEmailSucess)
        .catch(() => { this.errorMessages = ['Houve um erro, tente novamente!'] })
    },
    sendEmailSucess () {
      this.email = ''
      this.loading = false
      this.successMessages = ['Email enviado com sucesso!']
      this.errorMessages = []
    }
  }
}
</script>
