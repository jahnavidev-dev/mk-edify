import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FrontPage from '../src/components/FrontPage';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('FrontPage', () => {
  test('shows invalid alert for wrong credentials', async () => {
    const user = userEvent.setup();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );

    await user.type(screen.getByPlaceholderText(/enter your username/i), 'notadmin');
    await user.type(screen.getByPlaceholderText(/enter your password/i), 'bad');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(alertSpy).toHaveBeenCalledWith('Invalid credentials');
    alertSpy.mockRestore();
  });

  test('navigates to /admin when admin credentials are provided', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <FrontPage />
      </MemoryRouter>
    );

    await user.type(screen.getByPlaceholderText(/enter your username/i), 'admin');
    await user.type(screen.getByPlaceholderText(/enter your password/i), 'admin');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(mockNavigate).toHaveBeenCalledWith('/admin');
  });
});


