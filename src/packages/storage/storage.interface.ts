import { User } from '@/modules/users';

export type StorageContent = {
  users: User[];
};

type ArrayToObject<T extends (keyof StorageContent)[]> = {
  [K in T[number]]: StorageContent[K];
};

export interface StorageGateway {
  set(data: Partial<StorageContent>): Promise<void>;
  get<K extends keyof StorageContent>(key: K[]): Promise<ArrayToObject<K[]>>;
  remove(key: keyof StorageContent): void;
}
