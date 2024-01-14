import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import mkcert from 'vite-plugin-mkcert';
import Unocss from 'unocss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export function createVitePlugins(): PluginOption[] {
  return [
    VueRouter({
      dts: './types/typed-router.d.ts',
      extensions: ['.page.vue'],
    }),
    vue(),
    mkcert(),
    Unocss(),
    AutoImport({
      // 自动导入 vue vue-router
      imports: [
        'vue',
        VueRouterAutoImports,
        { 'vue-router/auto': ['useLink'] },
        { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] },
      ],
      vueTemplate: true,
      dirs: ['src/store/modules', 'src/components/common'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [IconsResolver(), NaiveUiResolver()],
    }),
    // 自动导入 icon
    Icons({
      autoInstall: true,
    }),
  ];
}
