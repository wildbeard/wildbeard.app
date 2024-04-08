import { createRouter, createWebHistory } from 'vue-router';
import Resume from './pages/Resume.vue';
import DevLogs from './pages/DevLogs.vue';
import NotFound from './pages/404.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: DevLogs,
    },
    {
      path: '/resume',
      component: Resume,
    },
    {
      path: '/dev-logs',
      component: DevLogs,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
  history: createWebHistory(),
});

export default router;
