import { StorageGateway, UserGateway } from '@/domain/gateways';
import { User } from '@/domain/entities';

export class ListUsersUseCase {
  constructor(
    private readonly userGateway: UserGateway,
    private readonly storage: StorageGateway
  ) {}

  async execute(): Promise<User[]> {
    const { users: storagedUsers } = await this.storage.get(['users']);

    if (!storagedUsers) {
      throw new Error('Não existe users na Storage');
    }

    if (storagedUsers.length === 0) {
      const users = await this.userGateway.list();
      this.storage.set({
        users
      });
      return users;
    }
    return storagedUsers;
  }
}
