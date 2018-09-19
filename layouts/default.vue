<template>
  <v-app style="background-color: #f3f7f9">
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
