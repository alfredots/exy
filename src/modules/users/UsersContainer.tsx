import { userService } from '@/main/services';
import { UserList } from '@/modules/users/components/UserList';

export const UsersContainer = () => {
  return (
    <>
      <h3>UsersContainer</h3>
      <UserList listUsers={() => userService.listUsers()} />
    </>
  );
};
