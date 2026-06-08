import { Modal } from '../../src/components/modal/modal';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../../src/store/userSlice';
import countriesReducer from '../../src/store/countriesSlice';
import { ModalProps } from '../../src/components/modal/modal';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const renderModal = ({ onClose, type }: ModalProps) => {
  return render(
    <Provider
      store={configureStore({
        reducer: { users: usersReducer, countries: countriesReducer },
      })}
    >
      <Modal onClose={onClose} type={type} />
    </Provider>
  );
};

describe('should render the controlled form', () => {
  it('should render', () => {
    const { getByText } = renderModal({
      onClose: () => {},
      type: 'controlled',
    });
    expect(getByText('Controlled form')).toBeDefined();
  });

  it('should render the uncontrolled form', () => {
    const { getByText } = renderModal({
      onClose: () => {},
      type: 'uncontrolled',
    });
    expect(getByText('Uncontrolled form')).toBeDefined();
  });
});

describe('should exit the modal', () => {
  it('should exit the modal when the close button is clicked', () => {
    const onCloseMock = vi.fn();
    const { getByText } = renderModal({
      onClose: onCloseMock,
      type: 'controlled',
    });
    fireEvent.click(getByText('X'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should exit the modal when the escape key is pressed', () => {
    const onCloseMock = vi.fn();
    const { getByText } = renderModal({
      onClose: onCloseMock,
      type: 'controlled',
    });
    fireEvent.keyDown(getByText('X'), { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalled();
  });
});
