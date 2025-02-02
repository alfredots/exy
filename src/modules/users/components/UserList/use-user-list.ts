import { useState, useEffect } from 'react';

import { User } from '@/domain/entities';

type UseUserListProps = {
  listUsers: () => Promise<User[]>;
};

export const useUserList = ({ listUsers }: UseUserListProps) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await listUsers();
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
