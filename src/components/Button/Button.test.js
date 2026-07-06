import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button component', () => {
  test('renders with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with icon', () => {
    const icon = <span data-testid="test-icon">★</span>;
    render(<Button text="With Icon" icon={icon} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('With Icon')).toBeInTheDocument();
  });

  test('applies additional className', () => {
    render(<Button text="Styled" className="custom-class" />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('custom-class');
    expect(btn).toHaveClass('button');
  });

  test('has tabIndex 0 for keyboard accessibility', () => {
    render(<Button text="Accessible" />);
    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
  });
});
