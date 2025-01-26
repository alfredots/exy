import { UserGateway } from '@/domain/gateways';
import { HttpClient, HttpStatusCode } from '@/infrastructure/protocols/http';
import { User } from '@/domain/entities';
import { endpoints } from '@/infrastructure/endpoints';
import { makeAxiosHttpClientAdapter } from '@/infrastructure/adapters/HttpClient';

class UserRemoteGateway implements UserGateway {
  constructor(
    private url: string,
    private http: HttpClient
  ) {}

  async list(): Promise<User[]> {
    const response = await this.http.request({
      url: this.url,
      method: 'get'
    });

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body as User[];

      default:
        throw new Error('');
    }
  }
}

export const makeUserRemoteGateway = () => new UserRemoteGateway(endpoints.users, makeAxiosHttpClientAdapter());
