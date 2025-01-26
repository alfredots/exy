import { User } from '@/domain/entities';

export interface UserGateway {
  list(): Promise<User[]>;
}
