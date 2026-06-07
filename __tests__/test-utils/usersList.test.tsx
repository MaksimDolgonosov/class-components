import { UsersList } from '../../src/components/usersList/usersList';
import { User } from '../../src/types/types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../src/store/userSlice';

const createUsers = (): User[] => {
  return [
    {
      id: '1',
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      gender: 'male',
      country: 'United States',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA...',
      terms: true,
    },
    {
      id: '2',
      name: 'Jane Doe',
      age: 25,
      email: 'jane.doe@example.com',
      gender: 'female',
      country: 'Canada',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA...',
      terms: false,
    },
  ];
};

const createTestStore = (users: User[]) =>
  configureStore({
    reducer: { users: usersReducer },
    preloadedState: { users: { users } },
  });

const renderUsersList = (users: User[] = createUsers()) =>
  render(
    <Provider store={createTestStore(users)}>
      <UsersList users={users} />
    </Provider>
  );

describe('UsersList', () => {
  it('should render the users list with the correct data', () => {
    const { getByText, getAllByRole } = renderUsersList();
    expect(getByText('Name: John Doe')).toBeInTheDocument();
    expect(getByText('Age: 30')).toBeInTheDocument();
    expect(getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(getByText('Gender: male')).toBeInTheDocument();
    expect(getByText('Country: United States')).toBeInTheDocument();
    expect(getByText('Terms: Yes')).toBeInTheDocument();
    expect(getByText('Name: Jane Doe')).toBeInTheDocument();
    expect(getByText('Age: 25')).toBeInTheDocument();
    expect(getByText('Email: jane.doe@example.com')).toBeInTheDocument();
    expect(getByText('Gender: female')).toBeInTheDocument();
    expect(getByText('Country: Canada')).toBeInTheDocument();
    expect(getByText('Terms: No')).toBeInTheDocument();

    expect(getAllByRole('button', { name: 'Remove' })).toHaveLength(2);
  });
});
