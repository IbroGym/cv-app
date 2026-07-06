import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationSlice';
import skillsReducer from '../features/skills/skillsSlice';

// localStorage middleware — persists skills state on every action
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  try {
    localStorage.setItem('skills', JSON.stringify(state.skills.skills));
  } catch (e) {
    console.warn('Could not save skills to localStorage', e);
  }
  return result;
};

const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
