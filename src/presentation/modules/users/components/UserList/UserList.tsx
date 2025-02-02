import { useUserList } from './use-user-list';

import { ListUsers } from '@/domain/use-cases';

type UserListProps = {
  listUsers: ListUsers;
};

export const UserList = ({ listUsers }: UserListProps) => {
  const { users } = useUserList({ listUsers });

  return <div>{users?.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
};
