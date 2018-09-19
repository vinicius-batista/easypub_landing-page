<template>
  <div>
    <v-parallax
      :src="require('~/assets/images/background-photo.jpeg')"
      height="900"
      alt="Plano de fundo - Homem em bar utilizando o celular"
    >
      <MainContent />
    </v-parallax>
    <v-container fluid grid-list-xs grid-list-xl>
      <About />
      <HowItWorks />
      <EmailField />
    </v-container>
  </div>
</template>

<script>
import MainContent from '@/components/main/MainContent'
import EmailField from '@/components/main/EmailField'
import About from '@/components/main/About'
import HowItWorks from '@/components/main/HowItWorks'

export default {
  components: {
    MainContent,
    EmailField,
    About,
    HowItWorks
  }
}
</script>
