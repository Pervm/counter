import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('should render Counter header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Counter/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('should render initial count value', () => {
    const { getByText } = render(<App />);
    const countElement = getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('should increment count on click', () => {
    const { getByText } = render(<App />);
    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);
    const countElement = getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('should decrement count on click', () => {
    const { getByText } = render(<App />);
    const decrementButton = getByText('-');
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });
});
