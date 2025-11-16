/* eslint-disable @typescript-eslint/no-explicit-any */

interface ChromeAPI {
  tabs: {
    query: (
      query: { active?: boolean; currentWindow?: boolean },
      callback: (tabs: any[]) => void
    ) => void;
  };
  storage: {
    local: {
      set: (items: Record<string, any>) => Promise<void>;
      get: (keys: string[]) => Promise<Record<string, any>>;
    };
  };
}

declare const chrome: ChromeAPI;
