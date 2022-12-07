import {createApp} from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'

import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from "vuetify/iconsets/mdi";

const myCustomLightTheme = {
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  dark: false,
  colors: {
    black: "#202225",
    dark: "#2f3136",
    'dark-gray': "#36393f",
    gray: "#42464d",
    'light-gray': "#b9bbbe",
    white: "#ffffff",
    main: "#5865f2",
    green: "#3ba55d",
  }
}
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
})

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
