<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      class="primary white--text text-xs-center flex"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Entre em contato:
        <a href="mailto:contato@easypub.com.br" class="white--text" style="text-decoration: none;">
          contato@easypub.com.br
        </a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>EasyPub</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-instagram'
    ]
  })
}
</script>
