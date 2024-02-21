import { createApp } from 'vue'
import App from '/components/App.vue'
import router from '/router'

// Import our custom CSS
import '/assets/styles.css'

createApp(App).use(router).mount('#app');