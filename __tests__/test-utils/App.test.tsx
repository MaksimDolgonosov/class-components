import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../src/components/App/App';
import { store } from '../../src/store';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

describe('App', () => {
  it('should render', () => {
    renderApp();
    expect(screen.getByText('Task: React Forms')).toBeDefined();
  });

  it('should render the modal', () => {
    renderApp();
    fireEvent.click(screen.getByText('Open modal'));
    expect(screen.getByText('Controlled form')).toBeDefined();
  });
});
