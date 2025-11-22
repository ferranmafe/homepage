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
    onChanged: {
      addListener: (
        callback: (changes: { [key: string]: any }, areaName: string) => void
      ) => void;
      removeListener: (
        callback: (changes: { [key: string]: any }, areaName: string) => void
      ) => void;
    };
  };
}

declare const chrome: ChromeAPI;
