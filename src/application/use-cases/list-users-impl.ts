import { UserGateway } from '@/application/gateways';
import { DataStorage } from '@/application/protocols';
import { User } from '@/domain/entities';
import { ListUsers } from '@/domain/use-cases';

export class ListUsersImpl implements ListUsers {
  constructor(
    private readonly userGateway: UserGateway,
    private readonly storage: DataStorage
  ) {}

  async execute(): Promise<User[]> {
    const { users: storagedUsers } = await this.storage.get(['users']);

    if (!storagedUsers || storagedUsers.length === 0) {
      const users = await this.userGateway.list();
      this.storage.set({
        users
      });
      return users;
    }
    return storagedUsers;
  }
}
