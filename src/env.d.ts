/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly PUBLIC_MODE?: 'dev' | 'prod';
  readonly PUBLIC_SERVER_URL: string;
  readonly PUBLIC_CENTRIFUGO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    UI_URL: string;
  }
}
