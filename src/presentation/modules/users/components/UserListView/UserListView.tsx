import { User } from '@/domain/entities';

type Props = {
  users: User[];
};

export const UserListView = ({ users }: Props) => <div>{users?.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
