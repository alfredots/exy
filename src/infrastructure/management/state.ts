import { User } from '@/domain/entities';

export type AppState = {
  users: User[];
};

export const initialState: AppState = {
  users: []
};
