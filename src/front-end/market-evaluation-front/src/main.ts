import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
// see vite.config.ts -> vite-plugin-vuetify enables autoImport
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
// icons 
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
});

createApp(App).use(vuetify).mount("#app");
