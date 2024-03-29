import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {
    primary: colors.blue.darken4,
    secondary: colors.lightBlue.lighten2,
    tertiary: colors.blueGrey.darken2
  }
})
