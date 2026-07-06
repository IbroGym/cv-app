import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Expertise from './index';

const sampleData = [
  {
    date: '2020–2021',
    info: {
      company: 'Google',
      job: 'Frontend Developer',
      description: 'Built web apps with React.',
    },
  },
  {
    date: '2021–2022',
    info: {
      company: 'Meta',
      job: 'Software Engineer',
      description: 'Worked on React Native.',
    },
  },
];

describe('Expertise component', () => {
  test('renders company names', () => {
    render(<Expertise data={sampleData} />);
    expect(screen.getByText('Google')).toBeInTheDocument();
    expect(screen.getByText('Meta')).toBeInTheDocument();
  });

  test('renders job titles', () => {
    render(<Expertise data={sampleData} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  test('renders dates', () => {
    render(<Expertise data={sampleData} />);
    expect(screen.getByText('2020–2021')).toBeInTheDocument();
    expect(screen.getByText('2021–2022')).toBeInTheDocument();
  });

  test('renders descriptions', () => {
    render(<Expertise data={sampleData} />);
    expect(screen.getByText('Built web apps with React.')).toBeInTheDocument();
  });

  test('renders empty list when data is empty', () => {
    const { container } = render(<Expertise data={[]} />);
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(0);
  });
});
