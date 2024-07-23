import { initialState } from './state';
import { makeLocalStorage } from 'shared/factories/cache/makeLocalStorage';

export enum Actions {
  ADD_USER = 'add-user'
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set(initialState);

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const storage = makeLocalStorage();
    if (message.type === Actions.ADD_USER) {
      storage.get(['users']).then((items) => {
        if (items.users.length > 0) {
          storage
            .set({ users: [...items.users, message.user] })
            .then(() => console.log('salvo com sucesso'));
        } else {
          storage
            .set({ users: [message.user] })
            .then(() => console.log('salvo com sucesso'));
        }
      });
    }
  });
});
