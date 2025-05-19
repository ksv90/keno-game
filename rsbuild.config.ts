import { readFileSync } from 'node:fs';
import process from 'node:process';

import { createModuleFederationConfig, pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { UI_URL, PUBLIC_MODE = 'prod' } = process.env;

const prodMode = PUBLIC_MODE === 'prod';

const httpsKey = prodMode && readFileSync('./certs/localhost.key', 'utf-8');
const httpsCert = prodMode && readFileSync('./certs/localhost.crt', 'utf-8');

const moduleFederationConfig = createModuleFederationConfig({
  name: 'kenoGame',
  remotes: {
    '@game-ui': `rslib_provider@${new URL('/mf-manifest.json', UI_URL).toString()}`,
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
  },
});

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 2222,
    cors: {
      origin: '*',
    },
    https: httpsKey && httpsCert ? { key: httpsKey, cert: httpsCert } : undefined,
  },
  output: {
    assetPrefix: '/keno-game/',
  },
  source: {
    define: {
      'import.meta.env.PUBLIC_MODE': JSON.stringify(PUBLIC_MODE),
    },
  },
});
