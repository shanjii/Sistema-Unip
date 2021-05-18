import { createApp } from 'vue'
import App from './app.vue'
import store from "./store/index";

const app = createApp(App)

app.use(store)

app.mount('#app')