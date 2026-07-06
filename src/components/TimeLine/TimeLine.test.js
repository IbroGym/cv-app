import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeLine from './index';

// Mock FontAwesomeIcon so tests don't need the full FA library
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ className }) => (
    <span data-testid="fa-icon" className={className} />
  ),
}));
jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faSyncAlt: 'faSyncAlt',
}));

describe('TimeLine component', () => {
  const sampleData = [
    { date: '2020–2021', title: 'Degree', description: 'Studied CS' },
    { date: '2021–2022', title: 'Work', description: 'Worked at EPAM' },
  ];

  test('renders loading spinner when status is loading', () => {
    render(<TimeLine data={[]} status="loading" />);
    expect(screen.getByTestId('fa-icon')).toBeInTheDocument();
  });

  test('renders error message when status is failed', () => {
    render(<TimeLine data={[]} status="failed" />);
    expect(
      screen.getByText(
        'Something went wrong; please review your server connection!'
      )
    ).toBeInTheDocument();
  });

  test('renders timeline items when status is succeeded', () => {
    render(<TimeLine data={sampleData} status="succeeded" />);
    expect(screen.getByText('Degree')).toBeInTheDocument();
    expect(screen.getByText('Studied CS')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Worked at EPAM')).toBeInTheDocument();
  });

  test('renders timeline items when no status is provided (idle)', () => {
    render(<TimeLine data={sampleData} />);
    expect(screen.getByText('Degree')).toBeInTheDocument();
  });

  test('renders nothing in the list when data is empty and idle', () => {
    const { container } = render(<TimeLine data={[]} />);
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(0);
  });
});
