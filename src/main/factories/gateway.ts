import { UserGateway, UserGatewayImpl } from '@/application/gateways';
import { endpoints } from '@/infra/endpoints';
import { makeAxiosHttpClient } from '@/main/factories/http';
import { makeUserMapper } from '@/main/factories/mappers';

export const makeUserGateway = (): UserGateway => new UserGatewayImpl(endpoints.users, makeAxiosHttpClient(), makeUserMapper());
