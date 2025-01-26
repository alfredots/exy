import { User } from '@/domain/entities';
import { useUserList } from './useUserList';

type UserListProps = {
  listUsers: () => Promise<User[]>;
};

export const UserList = ({ listUsers }: UserListProps) => {
  const { users, isLoading } = useUserList({ listUsers });

  if (isLoading) {
    return <>Carregando...</>;
  }

  return <div>{users?.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
};
