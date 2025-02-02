import { useEffect, useMemo, useState } from 'react';

import { DataStorageContent } from '@/application/contracts';
import { makeDataStorage } from '@/main/factories/cache';

export const useGetStorageValue = <K extends keyof DataStorageContent>(key: K): [DataStorageContent[K] | null] => {
  const [value, setValue] = useState<DataStorageContent[K] | null>(null);
  const dataStorage = useMemo(makeDataStorage, []);

  useEffect(() => {
    const listener = (changes: { [key: string]: chrome.storage.StorageChange }) => {
      setValue(changes[key].newValue);
    };

    chrome.storage.onChanged.addListener(listener);

    return () => {
      chrome.storage.onChanged.removeListener(listener);
    };
  }, [key]);

  useEffect(() => {
    dataStorage.get([key]).then((items) => {
      setValue(items[key]);
    });
  }, [key, dataStorage]);

  return [value];
};
