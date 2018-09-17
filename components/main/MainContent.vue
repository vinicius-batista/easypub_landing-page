<template>
  <v-layout
    class="mt-5"
    align-center
  >
    <v-flex
      lg4 offset-lg2
      class="mt-5"
    >
      <h3 class="primary--text font-weight-bold display-1 mb-3">
        Tenha um atendimento rápido e livre de erros com cardápios mais completos e intuitivos!
      </h3>
      <h6 class="primary--text font-weight-regular title" style="line-height: 1.3 !important;">
       Todas as informações do bar no seu celular com EasyPub. Evite erros causados por garçons e pela falta de informações em cardápios convencionais.
      </h6>
    </v-flex>
    <v-flex
      lg4
      class="mt-5"
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
