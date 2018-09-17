<template>
  <v-form v-model="valid" @submit.prevent="sendEmail">
    <v-layout class="my-3">
      <v-flex
        md3 offset-md2
        xs10 offset-xs1
      >
        <h6 class="primary--text font-weight-regular title text-xs-center text-md-left">Seja um dos primeiros a utilizar!</h6>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex
        md3 offset-md2
        xs10 offset-xs1
      >
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
        />
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  name: 'EmailField',
  data () {
    return { loading: false,
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
