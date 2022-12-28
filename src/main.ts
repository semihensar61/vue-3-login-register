import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index";
import {createI18n} from 'vue-i18n';
import  en from'./locale/en.json' 
import  tr from'./locale/tr.json' 

const messages = {
  en: en,
  tr: tr
}

const i18n = createI18n({
  locale: 'tr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

import './sass/main.scss';

const app = createApp(App);

app.use(router).use(store);
app.use(i18n)

app.mount("#app");
