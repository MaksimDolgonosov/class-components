import { ReactHookForm } from '../../src/components/forms/reactHookForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../src/store/userSlice';
import countriesReducer from '../../src/store/countriesSlice';
import { vi } from 'vitest';

vi.mock('../../src/utils/fileToBase64', () => ({
  fileToBase64: vi.fn().mockResolvedValue('data:image/png;base64,dGVzdA=='),
}));

const createImageFile = () =>
  new File(['test'], 'photo.png', { type: 'image/png' });

const renderReactHookForm = ({ onClose }: { onClose: () => void }) => {
  const store = configureStore({
    reducer: { users: usersReducer, countries: countriesReducer },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <ReactHookForm onClose={onClose} />
      </Provider>
    ),
  };
};

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText('Name'), 'John');
  await user.clear(screen.getByLabelText('Age'));
  await user.type(screen.getByLabelText('Age'), '25');
  await user.type(screen.getByLabelText('Email'), 'john@example.com');
  await user.selectOptions(screen.getByLabelText('Gender'), 'male');
  await user.type(screen.getByLabelText('Country'), 'Germany');
  await user.type(screen.getByLabelText('Password'), 'Pass1');
  await user.type(screen.getByLabelText('Confirm password'), 'Pass1');
  await user.upload(screen.getByLabelText('Image'), createImageFile());
  await user.click(screen.getByLabelText('I agree to the terms and conditions'));
};

describe('ReactHookForm', () => {
  it('should render all fields', () => {
    renderReactHookForm({ onClose: () => {} });

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Age')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
    expect(
      screen.getByLabelText('I agree to the terms and conditions')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should keep submit disabled while form is invalid', () => {
    renderReactHookForm({ onClose: () => {} });

    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

  it('should show validation error for name without capital letter', async () => {
    const user = userEvent.setup();
    renderReactHookForm({ onClose: () => {} });

    await user.type(screen.getByLabelText('Name'), 'john');
    await user.tab();

    expect(
      await screen.findByText('Name must start with a capital letter')
    ).toBeInTheDocument();
  });

  it('should show validation error when passwords do not match', async () => {
    const user = userEvent.setup();
    renderReactHookForm({ onClose: () => {} });

    await user.type(screen.getByLabelText('Password'), 'Pass1');
    await user.type(screen.getByLabelText('Confirm password'), 'Pass2');
    await user.tab();

    expect(
      await screen.findByText('Passwords do not match')
    ).toBeInTheDocument();
  });

  it('should show validation error for country not from the list', async () => {
    const user = userEvent.setup();
    renderReactHookForm({ onClose: () => {} });

    await user.type(screen.getByLabelText('Country'), 'Unknown country');
    await user.tab();

    expect(
      await screen.findByText('Select a country from the list')
    ).toBeInTheDocument();
  });

  it('should enable submit after valid form fill', async () => {
    const user = userEvent.setup();
    renderReactHookForm({ onClose: () => {} });

    await fillValidForm(user);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled();
    });
  });

  it('should submit valid form, save user to store and call onClose', async () => {
    const user = userEvent.setup();
    const onCloseMock = vi.fn();
    const { store } = renderReactHookForm({ onClose: onCloseMock });

    await fillValidForm(user);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled();
    });

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    expect(store.getState().users.users).toHaveLength(1);
    expect(store.getState().users.users[0]).toMatchObject({
      name: 'John',
      age: 25,
      email: 'john@example.com',
      gender: 'male',
      country: 'Germany',
      image: 'data:image/png;base64,dGVzdA==',
      terms: true,
    });
  });
});
