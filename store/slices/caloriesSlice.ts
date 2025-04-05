import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CaloriesData {
  User_ID: number;
  Gender: string;
  Age: number;
  Height: number;
  Weight: number;
  Duration: number;
  Heart_Rate: number;
  Body_Temp: number;
  Calories: number;
}

interface CaloriesState {
  data: CaloriesData[];
  data20: CaloriesData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CaloriesState = {
  data: [],
  data20: [],
  status: 'idle',
  error: null
};

export const fetchCaloriesData = createAsyncThunk(
  'calories/fetchCaloriesData',
  async () => {
    const response = await fetch('http://localhost:8000/api/calories');
    const data = await response.json();
    return data;
  }
);

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaloriesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCaloriesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
        state.data20 = action.payload.data20;
      })
      .addCase(fetchCaloriesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch calories data';
      });
  },
});

export default caloriesSlice.reducer;
