import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
  const domain = 'http://localhost:3333/'

  let api = axios.create({
    baseURL: domain,
    headers: {
      common: {
        Authorization: `Bearer`
      }
    }
  })

  return {
    provide: {
      api: api
    }
  }
})
