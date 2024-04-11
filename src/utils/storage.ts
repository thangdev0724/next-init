import { isClient } from '~/constants';

export const lcStorage = {
  get: (key: string) => {
    if (isClient) {
      return localStorage.getItem(key) !== 'undefined'
        ? JSON.parse(localStorage.getItem(key) as string)
        : undefined;
    }
  },
  set: (key: string, value: any): void => {
    if (isClient) localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (item: string, key: string) => {
    if (isClient) {
      const store = JSON.parse(localStorage.getItem(item) as string);
      delete store[key];
      localStorage.setItem(item, JSON.stringify(store));
    }
  },
};

export const ssStorage = {
  get: (key: string) => {
    if (isClient) return JSON.parse(sessionStorage.getItem(key) as string);
  },
  set: (key: string, value: any) => {
    if (isClient) sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove: (item: string, key: string) => {
    if (isClient) {
      const store = JSON.parse(sessionStorage.getItem(item) as string);
      delete store[key];
      sessionStorage.setItem(item, JSON.stringify(store));
    }
  },
};
