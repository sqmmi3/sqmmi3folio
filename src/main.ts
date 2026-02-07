import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

import './assets/main.css'

const app = createApp(App)

app.use(Particles, {
  init: async engine => {
    await loadSlim(engine);
  },
});
app.use(createPinia())
app.use(router)

app.mount('#app')
