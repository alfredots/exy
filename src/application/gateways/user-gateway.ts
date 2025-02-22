import { UserRemoteResponse } from '@/application/dto';
import { UserMapper } from '@/application/mappers';
import { HttpClient, HttpStatusCode } from '@/application/protocols';
import { User } from '@/domain/entities';

export interface UserGateway {
  getAll(): Promise<User[]>;
}

export class UserGatewayImpl implements UserGateway {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient,
    private readonly mapper: UserMapper
  ) {}

  async getAll(): Promise<User[]> {
    const response = await this.http.request<UserRemoteResponse[]>({
      url: this.url,
      method: 'get'
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!.map((data) => this.mapper.toDomain(data));

      default:
        throw new Error('');
    }
  }
}
