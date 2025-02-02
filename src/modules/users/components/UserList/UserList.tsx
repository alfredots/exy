import { useUserList } from './use-user-list';

import { User } from '@/domain/entities';

type UserListProps = {
  listUsers: () => Promise<User[]>;
};

export const UserList = ({ listUsers }: UserListProps) => {
  const { users } = useUserList({ listUsers });

  return <div>{users?.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
};
