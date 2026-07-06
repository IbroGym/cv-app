import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEducations = createAsyncThunk(
  'education/fetchEducations',
  async () => {
    const response = await fetch('/api/educations');
    if (!response.ok) {
      throw new Error('Failed to fetch educations');
    }
    return response.json();
  }
);

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
