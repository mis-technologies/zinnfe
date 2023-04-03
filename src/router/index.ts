import { createRouter, createWebHistory } from 'vue-router';

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'



// const routes = [
//   {
//     path: '/',
//     component: () => import('/@/pages/Index.vue'),
//   },
// ];

const routes = setupLayouts(generatedRoutes)


export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
