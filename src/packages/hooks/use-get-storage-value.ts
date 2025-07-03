import { useEffect, useMemo, useState } from 'react';

import { makeLocalStorageGateway } from '@/packages/storage';
import { StorageContent } from '@/packages/storage/storage.interface';

export const useGetStorageValue = <K extends keyof StorageContent>(key: K): [StorageContent[K] | null] => {
  const [value, setValue] = useState<StorageContent[K] | null>(null);
  const dataStorage = useMemo(makeLocalStorageGateway, []);

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
