import { userService } from '@/application/services/UserService';
import { UserList } from './components/UserList';

export const UsersContainer = () => {
  const { listUsers } = userService;
  return (
    <>
      <p>UsersContainer</p>
      <UserList listUsers={listUsers} />
    </>
  );
};
