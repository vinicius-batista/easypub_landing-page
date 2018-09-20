<template>
  <v-layout wrap align-content-space-around class="my-5">
    <v-flex
      md4 offset-md4
      xs12
      class="mb-3 mt-5"
    >
      <h6 class="tertiary--text font-weight-regular title text-xs-center text-md-left">Seja um dos primeiros a utilizar!</h6>
    </v-flex>
    <v-flex
      md6 offset-md3
      xl4 offset-xl4
      xs12
      sm8 offset-sm2
      class="mb-5"
    >
      <v-form v-model="valid" @submit.prevent="sendEmail">
        <v-text-field
          v-model="email"
          placeholder="Digite seu e-mail"
          solo
          v-bind="{ loading, rules }"
          :success-messages="successMessages"
          :error-messages="errorMessages"
          id="email-input"
        >
          <v-btn
            type="submit"
            color="secondary"
            slot="append-outer"
            large
            class="send-button"
            v-bind="{ loading }"
          >
            Enviar
          </v-btn>
        </v-text-field>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EmailField',
  data () {
    return {
      loading: false,
      email: '',
      valid: false,
      successMessages: [],
      errorMessages: [],
      rules: [
        (v) => !!v || this.successMessages.length > 0 || 'Não envie o campo em branco!'
      ]
    }
  },
  methods: {
    sendEmail () {
      if (this.valid) {
        this.loading = true
        this.errorMessages = []
        this.successMessages = []

        this
          .$firestore
          .collection('lead-emails')
          .add({ email: this.email })
          .then(this.sendEmailSucess)
          .catch(() => { this.errorMessages = ['Houve um erro, tente novamente!'] })
      }
    },
    sendEmailSucess () {
      this.email = ''
      this.loading = false
      this.successMessages = ['Entraremos em contato em breve!']
      this.errorMessages = []
    }
  }
}
</script>

<style scoped>
.send-button {
  margin: 0 0;
  left: -8px;
  top: -12px;
  height: 3.2em;
}
</style>
