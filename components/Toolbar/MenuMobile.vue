<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="slide-x-reverse-transition"
  >
    <v-btn slot="activator" icon>
      <v-icon>fa-bars</v-icon>
    </v-btn>
    <v-card color="#f0f0f0">
      <v-layout class="pt-5" justify-center>
        <v-flex xs1 class="pt-5">
          <v-btn
            icon
            @click="dialog = false"
            class="text-xs-center"
          >
            <v-icon>fa-times</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs8>
          <v-list class="links-list">
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              :to="item"
              @click="dialog = false"
            >
              <v-list-tile-title
                class="font-weight-bold subheading primary--text text-xs-center"
              >
                {{ item }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs5>
          <SubscribeBtn @click="dialog = false"/>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import SubscribeBtn from './SubscribeBtn'

export default {
  name: 'MenuMobile',
  components: { SubscribeBtn },
  data: () => ({
    dialog: false,
    items: ['Sobre', 'Como Funciona']
  })
}
</script>

<style scoped>
.links-list {
  background-color: #f0f0f0;
}
</style>
