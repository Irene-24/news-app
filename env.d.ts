export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RATES_KEY: string;
      NEWS_KEY: string;
    }
  }
}

declare global {
  interface RegExpConstructor {
    escape(text: string): string;
  }
}
