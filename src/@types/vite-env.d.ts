/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_CENTRIFUGO_URL: string;
  readonly VITE_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
