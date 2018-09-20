<template>
  <v-layout
    id="about"
    justify-center
    align-center
    wrap
    class="my-5"
  >
    <v-flex xs12 md5 xl4>
      <v-img :src="require('~/assets/images/about-min.png')"></v-img>
    </v-flex>
    <v-flex xs10 md5 xl4>
      <h2 class="tertiary--text display-1 font-weight-regular font-italic">
         Você é seu próprio garçom!
      </h2>
      <h4 class="blue-grey--text text--darken-1 title mt-5">
        Veja todos os detalhes dos pratos oferecidos pela casa e escolha o preferido quando quiser.
      </h4>
      <br>
      <h4 class="blue-grey--text text--darken-1 title mb-5">
        Nunca mais passe por situações desagradáveis como espera para ser atendido e eventuais erros. Confira o valor de sua comanda em tempo real.
      </h4>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'About'
}
</script>
