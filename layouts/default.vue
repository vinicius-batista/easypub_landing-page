<template>
  <v-app>
    <Toolbar />
    <nuxt />
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
export default {
  name: 'ola',
  components: {
    Toolbar
  }
}
</script>
