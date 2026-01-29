import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Profile header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Profile/i);
  expect(linkElement).toBeInTheDocument();
});
