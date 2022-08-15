import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Loading, Notify } from 'quasar'
import router from "@/router";

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const pinia = createPinia()
const myApp = createApp(App)

myApp.use(pinia)

myApp.use(Quasar, {
  plugins: {
    Loading,
    Notify
  },
  config: {
    loading: { /* look at QuasarConfOptions from the API card */ },
    notify: { /* look at QuasarConfOptions from the API card */ 
      position: "top-right"
    }
  }
})

myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')