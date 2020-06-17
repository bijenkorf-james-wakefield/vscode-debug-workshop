import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {

  test('renders link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/my link/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should call click handler passed as handleClick prop', () => {
    const onClickSpy = jest.fn();
    const { getByText } = render(<App handleClick={onClickSpy} />);
    const linkElement = getByText(/my link/i);
    fireEvent.click(linkElement);
    expect(onClickSpy).toHaveBeenCalled()
  });
})
