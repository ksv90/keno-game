declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      UI_URL: string;
      NODE_ENV: 'prod' | 'dev' | 'stage' | 'test';
    }
  }
}

export {};
