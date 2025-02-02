import { UserGateway } from '@/application/gateways';
import { HttpClient, HttpStatusCode } from '@/application/protocols';
import { User } from '@/domain/entities';
import { UserRemoteResponse } from '@/infra/dto';
import { UserMapper } from '@/infra/mappers';

export class UserGatewayImpl implements UserGateway {
  constructor(
    private url: string,
    private http: HttpClient,
    private mapper: UserMapper
  ) {}

  async list(): Promise<User[]> {
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
