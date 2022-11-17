import { createApp } from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
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
    black: "#1e2124",
    dark: "#282b30",
    'dark-gray': "#36393e",
    gray: "#424549",
    'light-gray': "#97A9B4",
    white: "#ffffff",
    main: "#7289da",
    green: "#57f287",
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
    .mount('#app')