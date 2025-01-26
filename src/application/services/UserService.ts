import { User } from '@/domain/entities';
import { ListUsersUseCase } from '@/domain/useCases/ListUsersUseCase';
import { makeUserRemoteGateway } from '@/infrastructure/gateways/UserRemoteGateway';

class UserService {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async listUsers(): Promise<User[]> {
    console.log(this);
    return await this.listUsersUseCase.execute();
  }
}

const userRemoteGateway = makeUserRemoteGateway();
const listUsersUseCase = new ListUsersUseCase(userRemoteGateway);

export const userService = new UserService(listUsersUseCase);
