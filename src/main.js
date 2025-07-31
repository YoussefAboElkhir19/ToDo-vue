import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// import { createUI } from 'vuebits/ui';
/* in your main CSS or style entry */
// import '@vuebits/ui/styles';
const app = createApp(App)

app.use(router)

app.mount('#app')
// app.use(createUI(config));
