import { DataStorage } from '@/application/protocols';
import { DataStorageAdapter } from '@/infra/cache';

export const makeDataStorage = (): DataStorage => new DataStorageAdapter();
