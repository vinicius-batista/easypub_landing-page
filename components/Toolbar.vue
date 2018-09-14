<template>
  <v-toolbar
    app
    flat
    class="pa-2"
    style="background-color: #f0f0f0"
  >
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <a class="blue-grey--text text--darken-2 font-weight-bold headline">EasyPub</a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        color="blue-grey darken-2"
        class="font-weight-bold subheading"
        flat
      >
        Sobre
      </v-btn>
      <v-btn
        color="blue-grey darken-2"
        class="font-weight-bold subheading"
        flat
      >
        Como Funciona
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      class="font-weight-bold subheading"
      color="blue-grey darken-5"
      dark
    >
      Inscreva-se
      <v-icon right small>fa-arrow-right</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>
