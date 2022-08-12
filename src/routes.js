import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Resume from './pages/Resume.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/resume',
      component: Resume,
    },
  ],
  history: createWebHistory(),
});

export default router;
