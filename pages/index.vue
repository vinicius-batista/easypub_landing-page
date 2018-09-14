<template>
  <v-container fluid>
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
