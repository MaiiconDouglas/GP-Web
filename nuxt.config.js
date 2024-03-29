export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GP Motos | Vendas é Compras de Motos Usadas é Novas.. ',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'subject', content: 'Faculdade de Tecnologia' },
      { name: 'generator', content: 'Visual Studio Code' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Maicon Douglas , Alan Devincula, Maria Eduarda , Julia Gonçalves ' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
               // Open Graph
               { property: 'og:type', content: 'Site GP MOTOS' },
               { property: 'og:author', content: 'Maicon Douglas , Alan Devincula, Maria Eduarda , Julia Gonçalves '  }
        ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
    },
    locales: [
      {
        code: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'pt-BR',
        file: 'pt-BR.js',
        name: 'Português'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'pt-BR'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
