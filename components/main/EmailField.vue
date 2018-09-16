<template>
  <v-form v-model="valid" @submit.prevent="sendEmail">
    <v-layout>
      <v-flex lg3 offset-lg2>
        <v-radio-group v-model="clientType" row>
        <v-radio label="Sou cliente" value="cliente"></v-radio>
        <v-radio label="Tenho estabelecimento" value="dono estabelecimento"></v-radio>
      </v-radio-group>
      </v-flex>
    </v-layout>
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
      clientType: 'cliente',
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

        const { email, clientType } = this
        this
          .$firestore
          .collection('lead-emails')
          .add({ email, clientType })
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
