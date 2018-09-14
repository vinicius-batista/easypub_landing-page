<template>
  <v-layout>
    <v-flex lg2 offset-lg2>
      <v-text-field
        placeholder="Digite seu e-mail"
        solo
        flat
        color="blue-grey darken-5"
      >
      </v-text-field>
    </v-flex>
    <v-flex lg2>
      <v-btn
        class="font-weight-bold subheading"
        color="blue-grey darken-5"
        dark
      >
        Inscreva-se
        <v-icon right small>fa-arrow-right</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EmailField'
}
</script>
