import { User } from '@/domain/entities';
import { ListUsersUseCase } from '@/domain/useCases/ListUsersUseCase';
import { userRemoteGateway, localStorageGateway } from '@/infrastructure/gateways';

class UserService {
  constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

  async listUsers(): Promise<User[]> {
    return await this.listUsersUseCase.execute();
  }
}

const listUsersUseCase = new ListUsersUseCase(userRemoteGateway, localStorageGateway);

export const userService = new UserService(listUsersUseCase);
