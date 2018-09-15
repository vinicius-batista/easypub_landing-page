<template>
  <v-toolbar
    app
    flat
    class="pa-2"
    style="background-color: #f0f0f0"
  >
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <a class="primary--text font-weight-bold headline">EasyPub</a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        color="primary"
        class="font-weight-bold subheading"
        flat
      >
        Sobre
      </v-btn>
      <v-btn
        color="primary"
        class="font-weight-bold subheading"
        flat
      >
        Como Funciona
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-btn
      class="font-weight-bold subheading"
      color="primary"
      dark
      @click="focusEmailInput"
    >
      Inscreva-se
      <v-icon right small>fa-arrow-right</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    focusEmailInput () {
      const emailInput = document.querySelector('#email-input')
      emailInput.focus()
      window.scrollY = 0
    }
  }
}
</script>
