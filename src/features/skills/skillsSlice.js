import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Load persisted skills from localStorage
const loadSkillsFromStorage = () => {
  try {
    const stored = localStorage.getItem('skills');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
};

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await fetch('/api/skills');
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return response.json();
  }
);

export const addSkill = createAsyncThunk(
  'skills/addSkill',
  async (skill) => {
    const response = await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      throw new Error('Failed to add skill');
    }
    return response.json();
  }
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: loadSkillsFromStorage(),
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchSkills
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Only use fetched data if localStorage is empty
        if (state.skills.length === 0) {
          state.skills = action.payload;
        }
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // addSkill
      .addCase(addSkill.fulfilled, (state, action) => {
        state.skills.push(action.payload);
      });
  },
});

export default skillsSlice.reducer;
