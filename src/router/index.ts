import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router/auto';

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App) {
  app.use(router);
}
