import { UserGateway } from '@/domain/gateways';
import { User } from '@/domain/entities';

export class ListUsersUseCase {
  constructor(private userGateway: UserGateway) {}

  async execute(): Promise<User[]> {
    return await this.userGateway.list();
  }
}
