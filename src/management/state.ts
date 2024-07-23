import { User } from 'domain/entities/User';

export type AppState = {
  counter: number;
  users: User[];
};

export const initialState: AppState = {
  counter: 0,
  users: []
};
