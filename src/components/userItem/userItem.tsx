import { User } from '../../types/types';
import './user-item.scss';
import { removeUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveUser = (userId: string) => {
    dispatch(removeUser(userId));
  };

  return (
    <div className="user-item">
      {user.image ? (
        <img className="user-item__image" src={user.image} alt={user.name} />
      ) : null}
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Email: {user.email}</div>
      <div>Gender: {user.gender}</div>
      <div>Country: {user.country}</div>
      <div>Terms: {user.terms ? 'Yes' : 'No'}</div>
      <button
        className="user-item__button"
        onClick={() => handleRemoveUser(user.id)}
      >
        Remove
      </button>
    </div>
  );
};
