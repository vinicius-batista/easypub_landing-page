<template>
  <v-layout wrap justify-center align-center>
    <v-flex
      md6
      xs10
      class="text-xs-center"
    >
      <h3 class="white--text font-weight-bold display-2 mb-3">
        Tenha um atendimento rápido e livre de erros com cardápios mais completos e intuitivos!
      </h3>
      <h6 class="white--text font-weight-regular title" style="line-height: 1.3 !important;">
        Todas as informações do bar no seu celular com EasyPub. Evite erros causados por garçons e pela falta de informações em cardápios convencionais.
      </h6>
      <SubscribeBtn class="mt-5"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SubscribeBtn from '@/components/Toolbar/SubscribeBtn'

export default {
  name: 'MainContent',
  components: {
    SubscribeBtn
  }
}
</script>
