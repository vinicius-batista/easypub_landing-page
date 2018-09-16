<template>
  <v-layout
    class="mt-5"
    align-center
  >
    <v-flex
      lg4 offset-lg2
      class="mt-5"
    >
      <h1 class="primary--text font-weight-bold display-2 mb-3">{{ title }}</h1>
      <h4 class="primary--text font-weight-medium subheading">{{ subtitle }}</h4>
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
  name: 'MainContent',
  data: () => ({
    title: 'Autoatendimento rápido e livre de erros com cardápios mais completos e intuitivos!',
    subtitle: 'Autoatendimento rápido e livre de erros com cardápios mais completos e intuitivos!'
  })
}
</script>
