import { User } from '@/domain/entities';

class UserMapper {
  toDomain(data: any): User {
    return {
      id: data.id,
      name: data.name,
      email: data.email
    } as User;
  }
}

export const userMapper = new UserMapper();
