import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Weather Now title in header', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { level: 1 });
  expect(titleElement).toHaveTextContent('Weather Now');
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Enter city name/i);
  expect(searchInput).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to Weather Now!/i);
  expect(welcomeMessage).toBeInTheDocument();
});