
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'EasyPub - Soluções digitais para bares',
    meta: [
      { charset: 'utf-8' },
      { name: 'lang', content: 'pt_BR' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'EasyPub é uma plataforma criada para agilizar o atendimento em bares com cardápios, comandas e pagamentos digitais.' }
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
