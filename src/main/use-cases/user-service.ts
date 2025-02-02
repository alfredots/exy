import { ListUsersImpl } from '@/application/use-cases/list-users-impl';
import { ListUsers } from '@/domain/use-cases';
import { makeDataStorage } from '@/main/factories/cache';
import { makeUserGateway } from '@/main/factories/gateways';

export const makeListUsers = (): ListUsers => new ListUsersImpl(makeUserGateway(), makeDataStorage());
