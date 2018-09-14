<template>
  <v-app style="background-color: #f0f0f0">
    <Toolbar />
    <v-content app>
      <nuxt />
    </v-content>
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
