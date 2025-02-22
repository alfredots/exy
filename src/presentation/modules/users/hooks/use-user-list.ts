import { useState, useEffect } from 'react';

import { User } from '@/domain/entities';
import { GetUsers } from '@/domain/use-cases';

type Props = {
  getUsers: GetUsers;
};

export const useUserList = ({ getUsers }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getUsers.execute();
        setUsers(res);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, [getUsers]);

  return {
    users
  };
};
