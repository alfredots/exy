import { User } from '@/domain/entities';
import { useUserList } from './useUserList';

type UserListProps = {
  listUsers: () => Promise<User[]>;
};

export const UserList = ({ listUsers }: UserListProps) => {
  const { users } = useUserList({ listUsers });

  return <div>{users?.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
};
