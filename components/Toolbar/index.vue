<template>
  <v-toolbar
    app
    flat
    class="pa-2"
    style="background-color: #f0f0f0"
  >
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-toolbar-title>
      <nuxt-link
        to="/"
        class="primary--text font-weight-bold headline"
        style="text-decoration: none;"
      >
        <img :src="require('~/assets/images/logo.png')" alt="" width="150" height="80">
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <LinksItems class="hidden-xs-only" />
    <v-spacer class="hidden-xs-only"></v-spacer>
    <SubscribeBtn class="hidden-xs-only"/>
    <v-spacer class="hidden-xs-only"></v-spacer>
    <MenuMobile class="hidden-sm-and-up"/>
  </v-toolbar>
</template>

<script>
import LinksItems from './LinksItems'
import SubscribeBtn from './SubscribeBtn'
import MenuMobile from './MenuMobile'

export default {
  name: 'Toolbar',
  components: { LinksItems, SubscribeBtn, MenuMobile }
}
</script>
