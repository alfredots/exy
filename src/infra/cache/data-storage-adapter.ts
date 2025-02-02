/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataStorage } from '@/application/protocols';

export class DataStorageAdapter implements DataStorage {
  set(data: Partial<Storage>): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.set(data, () => {
        resolve();
      });
    });
  }

  get<T>(keys: (keyof Storage)[]): Promise<T> {
    return new Promise((resolve) => {
      chrome.storage.local.get(keys, (res: any) => {
        resolve(res as T);
      });
    });
  }

  remove(key: 'users'): void {
    chrome.storage.local.remove(key);
  }
}
