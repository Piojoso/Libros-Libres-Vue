import type { RouteRecordRaw } from 'vue-router';

// RouteRecordRaw
export const HomeRoutes: RouteRecordRaw = {
  path: '/',
  name: 'home',
  // beforeEnter: []
  // redirect: { name: 'home' },
  component: () => import('@/modules/home/views/HomeView.vue')
}