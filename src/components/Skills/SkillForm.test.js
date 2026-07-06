import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../features/skills/skillsSlice';
import SkillForm from './SkillForm';

// Mock fetch for addSkill thunk
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: 'TypeScript', range: 80 }),
  })
);

function createTestStore() {
  return configureStore({
    reducer: { skills: skillsReducer },
    preloadedState: {
      skills: { skills: [], status: 'idle', error: null },
    },
  });
}

function renderWithStore(component) {
  const store = createTestStore();
  return render(<Provider store={store}>{component}</Provider>);
}

describe('SkillForm component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Skill name and Skill range inputs', () => {
    renderWithStore(<SkillForm />);
    expect(screen.getByPlaceholderText('Enter skill name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter skill range')).toBeInTheDocument();
  });

  test('renders Add skill button', () => {
    renderWithStore(<SkillForm />);
    expect(screen.getByRole('button', { name: /add skill/i })).toBeInTheDocument();
  });

  test('Add skill button is disabled initially', () => {
    renderWithStore(<SkillForm />);
    expect(screen.getByRole('button', { name: /add skill/i })).toBeDisabled();
  });

  test('shows error when name is touched and empty', async () => {
    renderWithStore(<SkillForm />);
    const nameInput = screen.getByPlaceholderText('Enter skill name');
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(screen.getByText('Skill name is a required field')).toBeInTheDocument();
    });
  });

  test('shows error when range is not a number', async () => {
    renderWithStore(<SkillForm />);
    const rangeInput = screen.getByPlaceholderText('Enter skill range');
    fireEvent.change(rangeInput, { target: { value: 'text' } });
    fireEvent.blur(rangeInput);
    await waitFor(() => {
      expect(screen.getByText("Skill range must be a 'number' type")).toBeInTheDocument();
    });
  });

  test('shows error when range is below 10', async () => {
    renderWithStore(<SkillForm />);
    const rangeInput = screen.getByPlaceholderText('Enter skill range');
    fireEvent.change(rangeInput, { target: { value: '1' } });
    fireEvent.blur(rangeInput);
    await waitFor(() => {
      expect(
        screen.getByText('Skill range must be greater than or equal to 10')
      ).toBeInTheDocument();
    });
  });

  test('shows error when range is above 100', async () => {
    renderWithStore(<SkillForm />);
    const rangeInput = screen.getByPlaceholderText('Enter skill range');
    fireEvent.change(rangeInput, { target: { value: '101' } });
    fireEvent.blur(rangeInput);
    await waitFor(() => {
      expect(
        screen.getByText('Skill range must be less than or equal to 100')
      ).toBeInTheDocument();
    });
  });

  test('Add skill button becomes active when form is valid', async () => {
    renderWithStore(<SkillForm />);
    fireEvent.change(screen.getByPlaceholderText('Enter skill name'), {
      target: { value: 'JavaScript' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter skill range'), {
      target: { value: '90' },
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /add skill/i })).not.toBeDisabled();
    });
  });

  test('submitting valid form resets inputs', async () => {
    renderWithStore(<SkillForm />);
    fireEvent.change(screen.getByPlaceholderText('Enter skill name'), {
      target: { value: 'TypeScript' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter skill range'), {
      target: { value: '80' },
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /add skill/i })).not.toBeDisabled();
    });
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /add skill/i }));
    });
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Enter skill name').value).toBe('');
      expect(screen.getByPlaceholderText('Enter skill range').value).toBe('');
    });
  });
});
