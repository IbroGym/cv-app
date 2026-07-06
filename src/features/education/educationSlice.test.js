import educationReducer, { fetchEducations } from './educationSlice';

describe('educationSlice reducer', () => {
  const initialState = { data: [], status: 'idle', error: null };

  test('returns initial state', () => {
    expect(educationReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  test('sets status to loading on fetchEducations.pending', () => {
    const action = { type: fetchEducations.pending.type };
    const state = educationReducer(initialState, action);
    expect(state.status).toBe('loading');
    expect(state.error).toBeNull();
  });

  test('sets data and status to succeeded on fetchEducations.fulfilled', () => {
    const data = [
      { date: '2020', title: 'School', description: 'High school' },
    ];
    const action = { type: fetchEducations.fulfilled.type, payload: data };
    const state = educationReducer(initialState, action);
    expect(state.status).toBe('succeeded');
    expect(state.data).toEqual(data);
  });

  test('sets status to failed with error on fetchEducations.rejected', () => {
    const action = {
      type: fetchEducations.rejected.type,
      error: { message: 'Failed to fetch' },
    };
    const state = educationReducer(initialState, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Failed to fetch');
  });
});
