import { User } from '@/domain/entities';

export interface ListUsers {
  execute: () => Promise<User[]>;
}
