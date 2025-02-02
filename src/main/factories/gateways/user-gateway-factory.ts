import { UserGateway } from '@/application/gateways';
import { UserGatewayImpl } from '@/infra/gateways';
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory';
import { makeUserMapper } from '@/main/factories/mappers/user-mapper-factory';

export const makeUserGateway = (): UserGateway =>
  new UserGatewayImpl('https://jsonplaceholder.typicode.com/users', makeAxiosHttpClient(), makeUserMapper());
