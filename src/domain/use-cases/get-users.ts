import { User } from '@/domain/entities';

export interface GetUsers {
  execute: () => Promise<User[]>;
}
