const title = 'EasyPub - Seu garçom virtual'
const description = 'EasyPub é uma plataforma criada para agilizar o atendimento em bares com cardápios, comandas e pagamentos digitais.'
const url = 'https://easypub.com.br/'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'lang', content: 'pt_BR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:site_name', content: 'EasyPub' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: url },
      // { property: 'og:image', content: 'https://easypub.com.br/my-special-image.jpg' },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: description },

      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      // Your twitter handle, if you have one.
      // { name: 'twitter:creator', content: '@alligatorio' },
      // { name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg' },

      // Google / Schema.org markup:
      { itemprop: 'name', content: title },
      { itemprop: 'description', content: description }
      // { itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', { src: '~/plugins/firebase.js', ssr: false }],
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-125974407-1',
        debug: {
          sendHitTask: process.env.NODE_ENV === 'production'
        }
      }
    ]
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
