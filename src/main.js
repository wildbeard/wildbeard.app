import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue';
import './index.css';

const router = createRouter({
  routes: [
    { path: '/', component: Home },
  ],
  history: createWebHistory(),
});

createApp(App)
  .use(router)
  .mount('#app')
