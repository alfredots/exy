import { UserMapper, UserMapperImpl } from '@/application/mappers';

export const makeUserMapper = (): UserMapper => new UserMapperImpl();
