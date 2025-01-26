import { User } from '@/domain/entities';
import { useState, useEffect } from 'react';

type UseUserListProps = {
  listUsers: () => Promise<User[]>;
};

export const useUserList = ({ listUsers }: UseUserListProps) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await listUsers();
        console.log({ res });
        setUsers(res);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  return {
    users
  };
};
