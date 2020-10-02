import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Big Mac', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Big Mac/i);
  expect(linkElement).toBeInTheDocument();
});
