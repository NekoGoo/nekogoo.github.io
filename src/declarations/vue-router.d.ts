// typings.d.ts or router.ts
import 'vue-router';

declare module 'vue-router' {
  // https://router.vuejs.org/guide/advanced/meta.html
  interface RouteMeta {
    // is optional
    isAdmin?: boolean;
    // must be declared by every route
    // requiresAuth: boolean;
  }
}
