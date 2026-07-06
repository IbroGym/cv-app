import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from './index';

// Mock image imports
jest.mock('../../assets/images/card_1.jpg', () => 'card1.jpg');
jest.mock('../../assets/images/card_3.png', () => 'card3.png');

describe('Portfolio component', () => {
  test('renders all tabs', () => {
    render(<Portfolio />);
    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('ui')).toBeInTheDocument();
    expect(screen.getByText('code')).toBeInTheDocument();
  });

  test('renders all portfolio items by default', () => {
    render(<Portfolio />);
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Project Three')).toBeInTheDocument();
    expect(screen.getByText('Project Four')).toBeInTheDocument();
  });

  test('filters items when ui tab is clicked', () => {
    render(<Portfolio />);
    fireEvent.click(screen.getByText('ui'));
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Three')).toBeInTheDocument();
    expect(screen.queryByText('Project Two')).not.toBeInTheDocument();
    expect(screen.queryByText('Project Four')).not.toBeInTheDocument();
  });

  test('filters items when code tab is clicked', () => {
    render(<Portfolio />);
    fireEvent.click(screen.getByText('code'));
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Project Four')).toBeInTheDocument();
    expect(screen.queryByText('Project One')).not.toBeInTheDocument();
  });

  test('renders with custom items prop', () => {
    const items = [
      { id: 99, title: 'Custom Project', category: 'ui', image: 'test.jpg', description: 'desc', link: '#' },
    ];
    render(<Portfolio items={items} />);
    expect(screen.getByText('Custom Project')).toBeInTheDocument();
  });

  test('each item has View project link', () => {
    render(<Portfolio />);
    const links = screen.getAllByText('View project');
    expect(links.length).toBe(4);
  });
});
