import type { UserConfig } from '@farmfe/core';

function defineConfig(config: UserConfig) {
  return config;
}

export default defineConfig({
  compilation: {
    input: {
      index: './index.html'
    },
    resolve: {
      symlinks: true
    },
    define: {
      BTN: 'Click me'
    },
    output: {
      path: './build'
    },
    // sourcemap: true,
    css: {
      // modules: {
      //   indentName: 'farm-[name]-[hash]'
      // },
      prefixer: {
        targets: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11']
      }
    },
    treeShaking: true,
    minify: false
  },
  server: {
    cors: true,
    port: 6684,
    host: 'localhost'
  },
  plugins: [
    '@farmfe/plugin-react',
    '@farmfe/plugin-sass',
    {
      name: 'plugin-finish-hook-test',
      finish: {
        executor(param, context, hookContext) {
          // console.log('plugin-finish-hook-test', param, context, hookContext);
        }
      }
    },
    {
      name: 'plugin-update-modules-hook-test',
      updateModules: {
        executor(param, context, hookContext) {
          console.log("params", param);
          console.log("context", context);
          console.log("hookContext", hookContext);
        }
      }
    }
  ]
});
