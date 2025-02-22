import { useMemo } from 'react';

import { makeGetUsers } from '@/main/use-cases/user-service';
import { UserListView } from '@/presentation/modules/users/components/UserListView';
import { useUserList } from '@/presentation/modules/users/hooks/use-user-list';

export const UsersContainer = () => {
  const memoizedMakeGetUsers = useMemo(makeGetUsers, []);

  const { users } = useUserList({ getUsers: memoizedMakeGetUsers });

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>UsersContainer</h3>
      <UserListView users={users} />
    </>
  );
};
