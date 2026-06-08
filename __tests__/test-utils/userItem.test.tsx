import { UserItem } from '../../src/components/userItem/userItem';
import { User } from '../../src/types/types';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../src/store/userSlice';

const createUser = (overrides?: Partial<User>): User => ({
  id: '1',
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  gender: 'male',
  country: 'United States',
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA...',
  terms: true,
  ...overrides,
});

const createTestStore = (users: User[] = []) =>
  configureStore({
    reducer: { users: usersReducer },
    preloadedState: { users: { users } },
  });

const renderUserItem = (user: User, testStore = createTestStore([user])) =>
  render(
    <Provider store={testStore}>
      <UserItem user={user} />
    </Provider>
  );

describe('UserItem', () => {
  it('should render the user item with the correct data', () => {
    const user = createUser();
    const { getByText } = renderUserItem(user);
    expect(getByText('Name: John Doe')).toBeInTheDocument();
    expect(getByText('Age: 30')).toBeInTheDocument();
    expect(getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(getByText('Gender: male')).toBeInTheDocument();
    expect(getByText('Country: United States')).toBeInTheDocument();
    expect(getByText('Terms: Yes')).toBeInTheDocument();
    expect(getByText('Remove')).toBeInTheDocument();
  });

  it('should remove the user when Remove button is clicked', async () => {
    const user = createUser();
    const testStore = createTestStore([user]);
    const { getByRole } = renderUserItem(user, testStore);

    await userEvent.click(getByRole('button', { name: 'Remove' }));

    expect(testStore.getState().users.users).toHaveLength(0);
  });
});
