import { DataStorage } from '@/application/protocols';
import { LocalStorageAdapter } from '@/infra/cache';

export const makeDataStorage = (): DataStorage => new LocalStorageAdapter();
