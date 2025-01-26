import { User } from '@/domain/entities';
import { useQuery } from '@tanstack/react-query';

type UseUserListProps = {
  listUsers: () => Promise<User[]>;
};

export const useUserList = ({ listUsers }: UseUserListProps) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: listUsers });

  return {
    users: data,
    isLoading,
    isError
  };
};
