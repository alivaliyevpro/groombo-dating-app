import { createRouter, createWebHistory } from 'vue-router';

import NProgress from '@/config/nprogress';

import { basicRoutes } from './routes/basic';

import { asyncRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [...basicRoutes, ...asyncRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// Injection Progress
router.beforeEach(() => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router
