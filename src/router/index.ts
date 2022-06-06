import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
// import AppDefaultLayout from '../views/layouts/AppDefaultLayout.vue';
// import GameLayout from '../views/layouts/GameLayout.vue';
// import About from '../views/About.vue';

// Dynamic layouts with meta: https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // meta: { layout: AppDefaultLayout },
  },
  // https://next.router.vuejs.org/guide/advanced/lazy-loading.html
  // Recommended to always use dynamic imports for all routes (can group these too)
  {
    path: '/about',
    name: 'About',
    // route level code-splitting generates a separate chunk (about.[hash].js)
    // for each route which is lazy-loaded when the route is visited
    component: () => import('../views/About.vue'),
  },
  // TODO: look into further but was throwing Invalid VNode error - using multi-page instead for layouts
  // {
  //   path: '/coc',
  //   name: 'CoC',
  //   component: () => import('../views/Game/Home.vue'),
  //   meta: { layout: () => import('../views/layouts/GameLayout.vue') },
  // },
  // https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/Shared/NoPage.vue'),
  },
];

// https://next.router.vuejs.org/guide/essentials/history-mode.html
// methods: createWebHistory, createWebHashHistory, createMemoryHistory
const router = createRouter({
  // Need to use hash address paths for GitHub Pages to avoid 404s
  history: createWebHashHistory(),
  routes,
});

export default router;
