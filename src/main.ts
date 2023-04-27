import { createApp } from 'vue';
import '@unocss/reset/tailwind.css'
import 'uno.css'
// import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue';
// import './styles/base.css';

// Router
import { Router } from '/@/router';

// i18n
// import messages from '@intlify/vite-plugin-vue-i18n/messages';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// const i18n = createI18n({
//   locale: 'en',
//   messages,
// });

const app = createApp(App);

// app.use(i18n);

app.use(Router);

app.use(pinia);

app.mount('#app');
