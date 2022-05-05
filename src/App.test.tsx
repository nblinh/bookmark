import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render the application main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gestion Bookmark/i);
  expect(linkElement).toBeInTheDocument();
});
