<template>
  <v-toolbar
    app
    flat
    class="pa-2"
    style="background-color: #f0f0f0"
  >
    <v-spacer class="hidden-xs-only"></v-spacer>
    <v-toolbar-title>
      <a class="primary--text font-weight-bold headline">EasyPub</a>
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
