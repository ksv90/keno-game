import { readFileSync } from 'node:fs';

import { createModuleFederationConfig, pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const loadEnvResult = loadEnv();

const { UI_URL, PUBLIC_MODE } = loadEnvResult.parsed;

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
});
