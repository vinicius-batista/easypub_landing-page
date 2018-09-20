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
          <v-list class="transparent">
            <v-list-tile
              v-for="({ label, element }, i) in items"
              :key="i"
              @click="goTo(element, { offset: -1999 })"
            >
              <v-list-tile-title
                class="font-weight-bold title tertiary--text text-xs-center"
              >
                {{ label }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs6>
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
    items: [
      {
        label: 'Sobre',
        element: '#about'
      },
      {
        label: 'Como Funciona',
        element: '#how-it-works'
      }
    ]
  }),
  methods: {
    goTo (element) {
      this.dialog = false
      this.$vuetify.goTo(element)
    }
  }
}
</script>
