import { FormData } from '../../types/types';
import { UserItem } from '../userItem/userItem';
import './users-list.scss';

interface UsersListProps {
  users: FormData[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className="users-list">
      {users.length > 0 ? (
        users.map((user: FormData) => <UserItem key={user.name} user={user} />)
      ) : (
        <div className="users-list-empty">No users found</div>
      )}
    </div>
  );
};

export default UsersList;
