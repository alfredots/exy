import { UserGateway } from '@/domain/gateways';
import { HttpClient, HttpStatusCode } from '@/infrastructure/protocols/http';
import { User } from '@/domain/entities';
import { endpoints } from '@/infrastructure/endpoints';
import { makeAxiosHttpClientAdapter } from '@/infrastructure/adapters/HttpClient';
import { UserRemoteResponse } from '@/infrastructure/models/UserApiResponse';
import { userMapper } from '@/infrastructure/mappers';

class UserRemoteGateway implements UserGateway {
  constructor(
    private url: string,
    private http: HttpClient
  ) {}

  async list(): Promise<User[]> {
    const response = await this.http.request<UserRemoteResponse[]>({
      url: this.url,
      method: 'get'
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body!.map((data) => userMapper.toDomain(data));

      default:
        throw new Error('');
    }
  }
}

export const userRemoteGateway = new UserRemoteGateway(endpoints.users, makeAxiosHttpClientAdapter());
