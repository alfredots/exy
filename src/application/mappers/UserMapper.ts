import { UserRemoteResponse } from '@/application/dto';
import { User } from '@/domain/entities';

export interface UserMapper {
  toDomain(data: UserRemoteResponse): User;
}

export class UserMapperImpl implements UserMapper {
  toDomain(data: UserRemoteResponse): User {
    return {
      id: data.id,
      name: data.name,
      email: data.email
    } as User;
  }
}
