import { ListUsersImpl } from '@/application/use-cases/list-users-impl';
import { User } from '@/domain/entities';
import { makeDataStorage } from '@/main/factories/cache';
import { makeUserGateway } from '@/main/factories/gateways';

class UserService {
  constructor(private readonly listUsersUseCase: ListUsersImpl) {}

  async listUsers(): Promise<User[]> {
    return await this.listUsersUseCase.execute();
  }
}

const listUsersUseCase = new ListUsersImpl(makeUserGateway(), makeDataStorage());

export const userService = new UserService(listUsersUseCase);
