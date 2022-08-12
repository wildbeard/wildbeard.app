import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Resume from './pages/Resume.vue';
import NotFound from './pages/404.vue';

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
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

export default router;
