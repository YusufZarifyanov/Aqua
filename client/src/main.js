import { createApp } from 'vue'
import App from './App.vue'

import {ymapMarker} from "vue-yandex-maps";
import {yandexMap } from "vue-yandex-maps";
import YmapPlugin from 'vue-yandex-maps'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, fa } from 'vuetify/iconsets/fa'

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import axios from 'axios';

const vuetify = createVuetify({
    icons: {
        defaultSet: "fa",
        aliases,
        sets: {
            fa
        },
    },
    components: {
        ...components,
        yandexMap,
        ymapMarker
    },

})

const settings = {
    apiKey: '09e2d4d1-86f9-41b4-bcff-07351c8a1b4d',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(YmapPlugin, settings).use(vuetify).mount('#app')
