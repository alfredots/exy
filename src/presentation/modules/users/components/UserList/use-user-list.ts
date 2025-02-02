import { useState, useEffect } from 'react';

import { User } from '@/domain/entities';
import { ListUsers } from '@/domain/use-cases';

type UseUserListProps = {
  listUsers: ListUsers;
};

export const useUserList = ({ listUsers }: UseUserListProps) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await listUsers.execute();
        setUsers(res);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, [listUsers]);

  return {
    users
  };
};
