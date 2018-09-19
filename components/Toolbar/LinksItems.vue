<template>
  <v-toolbar-items>
    <v-btn
      v-for="(item, i) in items"
      :key="i"
      color="primary"
      class="font-weight-bold subheading"
      flat
    >
      {{ item }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: 'LinksItems',
  data: () => ({
    items: ['Sobre', 'Como Funciona']
  })
}
</script>
