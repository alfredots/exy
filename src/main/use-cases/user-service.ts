import { GetUsersImpl } from '@/application/use-cases/get-users-impl';
import { GetUsers } from '@/domain/use-cases';
import { makeDataStorage } from '@/main/factories/cache';
import { makeUserGateway } from '@/main/factories/gateway';

export const makeGetUsers = (): GetUsers => new GetUsersImpl(makeUserGateway(), makeDataStorage());
