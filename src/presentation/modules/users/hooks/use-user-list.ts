import { useEffect } from 'react';

import { User } from '@/domain/entities';
import { GetUsers } from '@/domain/use-cases';
import { useAsyncReducer } from '@/presentation/hooks/use-async-reducer';

type Props = {
  getUsers: GetUsers;
};

export const useUserList = ({ getUsers }: Props) => {
  const [{ data, ...rest }, dispatch] = useAsyncReducer<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: 'FETCH_START' });
        const res = await getUsers.execute();
        dispatch({ type: 'FETCH_SUCCESS', payload: res });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR' });
      }
    })();
  }, [getUsers, dispatch]);

  return { users: data, ...rest };
};
