export default defineNuxtConfig({
  plugins: [
    // Make sure your plugin is properly listed here
    '~/plugins/axios.js',
  ],
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt','nuxt-icon','@samk-dev/nuxt-vcalendar','@nuxtjs/axios'],
  axios:{
    baseURL:'http://localhost:3000'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})