import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, fa } from 'vuetify/iconsets/fa'

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import axios from 'axios';
import router from './router'

const vuetify = createVuetify({
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa
        },
    },
    components

})


const app = createApp(App).use(router);

app.config.globalProperties.$http = axios;

app.use(router).use(vuetify).mount('#app')
