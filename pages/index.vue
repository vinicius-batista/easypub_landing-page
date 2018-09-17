<template>
  <v-container fluid class="container-fullscreen">
    <MainContent />
    <EmailField />
  </v-container>
</template>

<script>
import EmailField from '@/components/main/EmailField'
import MainContent from '@/components/main/MainContent'

export default {
  components: {
    EmailField,
    MainContent
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
