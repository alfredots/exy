import { UserMapper, UserMapperImpl } from '@/infra/mappers';

export const makeUserMapper = (): UserMapper => new UserMapperImpl();
