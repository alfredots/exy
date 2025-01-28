import { Storage } from '@/domain/entities';
import { StorageGateway } from '@/domain/gateways';

class LocalStorageGateway implements StorageGateway {
  set(data: Partial<Storage>): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.set(data, () => {
        resolve();
      });
    });
  }

  get<T = any>(keys: (keyof Storage)[]): Promise<T> {
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

export const localStorageGateway = new LocalStorageGateway();
