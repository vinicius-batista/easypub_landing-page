<template>
  <v-toolbar-items>
    <v-btn
      v-for="({ label, element }, i) in items"
      :key="i"
      color="tertiary"
      class="font-weight-bold subheading"
      flat
      @click="$vuetify.goTo(element, { offset: -60 })"
    >
      {{ label }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'LinksItems',
  data: () => ({
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
  })
}
</script>
