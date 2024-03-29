import 'uno.css';
import '@/styles/index.scss';
import 'animate.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';

function setupApp() {
  const app = createApp(App);
  // 配置 store
  setupStore(app);
  // 配置路由
  setupRouter(app);
  app.mount('#app');
}

setupApp();
