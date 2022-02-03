import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// there is createWebHistory, createWebHashHistory, createMemoryHistory
import App from './App.vue';

// https://next.router.vuejs.org/guide/migration
// https://next.router.vuejs.org/guide

// createApp(App).mount('#app');

// 1. Define route components.
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. Define some routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// 3. Create the router instance with additional options
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = createApp(App);
app.use(router); // Make the app router-aware
app.mount('#app');
