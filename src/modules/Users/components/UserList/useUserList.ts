import { User } from '@/domain/entities';
import { useState, useEffect } from 'react';

type UseUserListProps = {
  listUsers: () => Promise<User[]>;
};

export const useUserList = ({ listUsers }: UseUserListProps) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    listUsers()
      .then((res) => {
        console.log({ res });
        return res;
      })
      .then(setUsers);
  }, []);

  return {
    users
  };
};
