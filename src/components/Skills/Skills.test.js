import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../features/skills/skillsSlice';
import Skills from './index';

// Mock FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="fa-icon" />,
}));
jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faEdit: 'faEdit',
}));

// Mock child SkillForm to keep tests focused
jest.mock('./SkillForm', () => () => <div data-testid="skill-form">SkillForm</div>);

const mockSkills = [
  { name: 'React', range: 100 },
  { name: 'CSS', range: 55 },
];

function createTestStore(preloadedSkills = []) {
  return configureStore({
    reducer: { skills: skillsReducer },
    preloadedState: {
      skills: { skills: preloadedSkills, status: 'succeeded', error: null },
    },
  });
}

describe('Skills component', () => {
  test('renders skill bars from store', () => {
    const store = createTestStore(mockSkills);
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
  });

  test('renders axis labels', () => {
    const store = createTestStore(mockSkills);
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getByText('Proficient')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
    expect(screen.getByText('Master')).toBeInTheDocument();
  });

  test('form is hidden by default', () => {
    const store = createTestStore(mockSkills);
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    expect(screen.queryByTestId('skill-form')).not.toBeInTheDocument();
  });

  test('clicking "Open edit" shows the form', () => {
    const store = createTestStore(mockSkills);
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByTestId('skill-form')).toBeInTheDocument();
  });

  test('clicking toggle button again closes the form', () => {
    const store = createTestStore(mockSkills);
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn); // open
    fireEvent.click(btn); // close
    expect(screen.queryByTestId('skill-form')).not.toBeInTheDocument();
  });
});
