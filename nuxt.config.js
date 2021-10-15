//import axios from "~/.nuxt/axios";
const axiosOriginal = require('axios')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 head: {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    {  type:"image/png", sizes:"64x64", rel:"icon", href: 'https://radio-online.top/favicon.png?id=190' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://ionicons.com/v2/css/ionicons.css'},
    { rel: 'stylesheet', type: 'text/css', href:'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'}

    //<link href="https://ionicons.com/v2/css/ionicons.css" rel="stylesheet" type="text/css">
  ]
},
  /*
  ** Customize the progress-bar color
  */
 loading: {
  color: '#00aec5',
  height: '4px'
},

styleResources: {
  scss: [
    './scss/_vars.scss',
    './scss/_default.scss',
    './scss/_transition.scss',
    './scss/_colors.scss'
  ]
},
  /*
  ** Global CSS
  */
  css: [
    './assets/font/font-awesome/css/all.min.css',
    './scss/_style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/sitemap',
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/yandex-metrika'

  ],

  sitemap: {
    hostname: 'https://radio-online.top',
    cacheTime: 0,
    gzip: true,
    lastmod: '2021-01-17',
    routes: async ()=> {
      const {data} = await axiosOriginal.get('http://localhost:4200/jenre')
      return data.map((item)=> `?jenre=${item}`)
    }
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  yandexMetrika: {
    id: '71056123',
    webvisor: false,
     clickmap:true,
    // useCDN:false,
    trackLinks:true,
    accurateTrackBounce:true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack helpers here
    */
    extend (config, ctx) {
    }
  }
}
