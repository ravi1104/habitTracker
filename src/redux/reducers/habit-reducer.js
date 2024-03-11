import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habits',
  initialState: {},
  reducers: {
    addHabit: (state, action) => {
      const { date, habit } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      const existingHabitIndex = state[date].findIndex(existingHabit => existingHabit.name === habit.name);
      if (existingHabitIndex !== -1) {
        state[date][existingHabitIndex].status = habit.status;
      } else {
        state[date].push(habit);
      }
    },
    
    updateHabitStatus: (state, action) => {
      const { date, name, newStatus } = action.payload;
      if (state[date] && state[date].length) {
        const habitIndex = state[date].findIndex(habit => habit.name === name);
        if (habitIndex !== -1) {
          state[date][habitIndex].status = newStatus;
        }
      }
    }
  }
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;

export const habitSelector = state => state.habitReducer;
