import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHabits = createAsyncThunk(
  'habits/fetchHabits',
  async () => {
    // console.log("running");
    const response = await fetch('https://habittrackerapi-vy90.onrender.com/api/habits');
    const data = await response.json();
    // console.log(data);
    return data; // Return the  JSON data
  },
);

export const addNewHabit = createAsyncThunk(
  'habits/addNewHabit',
  async (newHabit) => {
    const response = await fetch('https://habittrackerapi-vy90.onrender.com/api/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: newHabit.date, habit: { name: newHabit.name, status: newHabit.newStatus } }),
    });

    if (!response.ok) {
      throw new Error('Failed to add habit');
    }
    const data = await response.json();
    return data;
  }
)
export const updateAsyncHabitStatus = createAsyncThunk(
  'habits/updateAsyncHabitStatus',
  async ({id,status}) => {
    const response = await fetch(`https://habittrackerapi-vy90.onrender.com/api/habits/update?id=${id}&status=${status}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error('Failed to add habit');
    }
    const data = await response.json();
    return data;
  }
)

const initialState = {
  habits: { '2024-04-09': [{ name: 'abc', status: 'Pending' }] },
}

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const { date, habit } = action.payload;
      if (!state.habits[date]) {
        state.habits[date] = [];
      }

      const existingHabitIndex = state.habits[date].findIndex(existingHabit => existingHabit.name === habit.name);
      if (existingHabitIndex !== -1) {
        state.habits[date][existingHabitIndex].status = habit.status;
      } else {
        state.habits[date].push(habit);
      }
    },

    updateHabitStatus: (state, action) => {
      const { date, newStatus,_id } = action.payload;
      if (state.habits[date] && state.habits[date].length) {
        const habitIndex = state.habits[date].findIndex(habit => habit._id === _id);
        if (habitIndex !== -1) {
          state.habits[date][habitIndex].status = newStatus;
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.fulfilled, (state, action) => {
        // console.log(action.payload[0]._id);
        state.habits = action.payload;
      })
      .addCase(addNewHabit.fulfilled, (state, action) => {
        state.habits = [...state.habits, action.payload];
      })
      .addCase(updateAsyncHabitStatus.fulfilled, (state, action) => {
        const _id = action.payload._id;
        const date = action.payload.date;
        const habitIndex = state.habits.findIndex(habit => habit._id === _id);
        // console.log(action.payload);
        if (habitIndex !== -1) {
          state.habits[habitIndex] = action.payload;
        }
        // console.log(state.habits);
      });
  }

})

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;

export const habitSelector = state => state.habitReducer;
