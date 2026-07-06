import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from './index';

describe('Box component', () => {
  test('renders title', () => {
    render(<Box title="About me" />);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  test('renders content text', () => {
    render(<Box title="Test" content="Some content here" />);
    expect(screen.getByText('Some content here')).toBeInTheDocument();
  });

  test('renders children', () => {
    render(
      <Box title="Test">
        <span data-testid="child">Child content</span>
      </Box>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  test('renders without title', () => {
    const { container } = render(<Box content="Text" />);
    expect(container.querySelector('h2')).not.toBeInTheDocument();
  });

  test('renders without content', () => {
    const { container } = render(<Box title="Title" />);
    expect(container.querySelector('p')).not.toBeInTheDocument();
  });
});
