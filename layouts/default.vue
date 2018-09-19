<template>
  <v-app light>
    <Toolbar />
    <v-content app>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'
export default {
  name: 'DefaultLayout',
  components: {
    Toolbar,
    Footer
  }
}
</script>
