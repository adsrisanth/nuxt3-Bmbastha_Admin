export default defineNuxtPlugin(nuxtApp => {
  const axios = useAxios()
  axios.defaults.baseURL = 'http://localhost:3000'
});
