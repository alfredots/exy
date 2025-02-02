import { makeListUsers } from '@/main/use-cases';
import { UserList } from '@/presentation/modules/users/components/UserList';

export const UsersContainer = () => {
  const listUsers = makeListUsers();

  return (
    <>
      <h3>UsersContainer</h3>
      <UserList listUsers={listUsers} />
    </>
  );
};
