import skillsReducer, {
  fetchSkills,
  addSkill,
} from './skillsSlice';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('skillsSlice reducer', () => {
  const initialState = { skills: [], status: 'idle', error: null };

  test('returns initial state', () => {
    expect(skillsReducer(undefined, { type: '@@INIT' })).toMatchObject({
      status: 'idle',
      error: null,
    });
  });

  test('sets status to loading on fetchSkills.pending', () => {
    const action = { type: fetchSkills.pending.type };
    const state = skillsReducer(initialState, action);
    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('sets status to succeeded and fills skills on fetchSkills.fulfilled when empty', () => {
    const skills = [{ name: 'React', range: 100 }];
    const action = { type: fetchSkills.fulfilled.type, payload: skills };
    const state = skillsReducer(initialState, action);
    expect(state.status).toBe('succeeded');
    expect(state.skills).toEqual(skills);
  });

  test('keeps existing skills on fetchSkills.fulfilled when already populated', () => {
    const existingSkills = [{ name: 'CSS', range: 50 }];
    const existing = { skills: existingSkills, status: 'loading', error: null };
    const action = { type: fetchSkills.fulfilled.type, payload: [{ name: 'React', range: 100 }] };
    const state = skillsReducer(existing, action);
    expect(state.skills).toEqual(existingSkills);
  });

  test('sets status to failed on fetchSkills.rejected', () => {
    const action = { type: fetchSkills.rejected.type, error: { message: 'Network error' } };
    const state = skillsReducer(initialState, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Network error');
  });

  test('appends new skill on addSkill.fulfilled', () => {
    const existing = { skills: [{ name: 'React', range: 100 }], status: 'succeeded', error: null };
    const newSkill = { name: 'TypeScript', range: 80 };
    const action = { type: addSkill.fulfilled.type, payload: newSkill };
    const state = skillsReducer(existing, action);
    expect(state.skills).toHaveLength(2);
    expect(state.skills[1]).toEqual(newSkill);
  });
});
