<template>
  <v-layout
    class="mt-5"
    justify-center
  >
    <v-flex
      md4
      xs10
      class="mt-5"
    >
      <h3 class="primary--text font-weight-bold display-1 mb-3 text-xs-center text-md-left">
        Tenha um atendimento rápido e livre de erros com cardápios mais completos e intuitivos!
      </h3>
      <h6 class="primary--text font-weight-regular title text-xs-center text-md-left" style="line-height: 1.3 !important;">
       Todas as informações do bar no seu celular com EasyPub. Evite erros causados por garçons e pela falta de informações em cardápios convencionais.
      </h6>
    </v-flex>
    <v-flex
      md4
      class="mt-5 hidden-sm-and-down"
    >
      <v-img :src="require('~/assets/images/principal-photo.png')"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>
