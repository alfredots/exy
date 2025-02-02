import { User } from '@/domain/entities';
import { UserRemoteResponse } from '@/infra/dto';

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
