import { createApp } from 'vue'
import App from './App.vue'

// import YmapPlugin from 'vue-yandex-maps'
import {ymapMarker} from "vue-yandex-maps";
import {yandexMap } from "vue-yandex-maps";
import YmapPlugin from 'vue-yandex-maps'


// import {ymapMarker} from "vue-yandex-maps";
// import {yandexMap} from "vue-yandex-maps";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import { aliases, fa } from 'vuetify/iconsets/fa'

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";


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

createApp(App).use(YmapPlugin, settings).use(vuetify).mount('#app')
