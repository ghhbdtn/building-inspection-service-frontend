import Vue, { createApp } from 'vue'
import {createVuetify} from "vuetify";
import './assets/main.scss'
import 'vuetify/dist/vuetify.min.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from "./router";
import store from "./store";
import axios from 'axios';

const vuetify = createVuetify({
    ssr: true,
    components,
    directives
})

createApp(App).use(vuetify).use(router).use(store).mount('#app')


