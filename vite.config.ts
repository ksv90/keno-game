import { normalize } from 'node:path';
import process from 'node:process';

import federationPlugin from '@originjs/vite-plugin-federation';
import reactPlugin from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const { UI_URL } = loadEnv(mode, process.cwd(), '');

  if (!UI_URL) {
    throw new Error('Требуется установить переменную окружения UI_URL, которая укажет, по какому адресу искать интерфейс игры');
  }

  return {
    base: 'keno-game',
    plugins: [
      reactPlugin({
        babel: { plugins: [['@babel/plugin-proposal-decorators', { loose: true, version: '2022-03' }]] },
      }),
      federationPlugin({
        name: 'keno',
        remotes: {
          '@ksv90/game-ui': normalize(`${UI_URL}/assets/index.js`),
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});
