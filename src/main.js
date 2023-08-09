import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import vuejsPaginateNextUmd from 'vuejs-paginate-next'

createApp(App).use(router).use(
    // vuejsPaginateNextUmd
    ).mount('#app')
