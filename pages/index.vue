<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/background-photo.jpeg')"
      height="900"
      alt="Plano de fundo - Homem em bar utilizando o celular"
    >
      <MainContent />
    </v-parallax>
    <v-container >
      <EmailField />
    </v-container>
  </div>
</template>

<script>
import MainContent from '@/components/main/MainContent'
import EmailField from '@/components/main/EmailField'

export default {
  components: {
    MainContent,
    EmailField
  }
}
</script>

<style scoped>
@media all and (min-width: 960px) {
  .container-fullscreen {
    min-height: calc(100vh - 64px);
    height:  calc(100vh - 64px);
  }
}
</style>
