/* eslint-disable @typescript-eslint/no-explicit-any */

import { Storage } from '@/domain/entities';

type ArrayToObject<T extends (keyof Storage)[]> = {
  [K in T[number]]: Storage[K];
};

export interface StorageGateway {
  set(data: Partial<Storage>): Promise<void>;
  get<K extends keyof Storage>(key: K[]): Promise<ArrayToObject<K[]>>;
  remove(key: keyof Storage): void;
}
