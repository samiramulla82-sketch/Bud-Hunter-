/// <reference types="vite/client" />

// Extend window interface to include storage API
declare global {
  interface Window {
    storage: {
      get: (key: string) => Promise<{ value: string } | null>;
      set: (key: string, value: string) => Promise<void>;
    };
  }
}

export {};
