import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVehicles } from "../api/vehiclesApi";

export const loadVehicles = createAsyncThunk(
  "vehicles/load",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchVehicles();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addVehicle(state, action) {
      state.items.push(action.payload);
    },
    updateVehicle(state, action) {
      const index = state.items.findIndex((v) => v.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteVehicle(state, action) {
      state.items = state.items.filter((v) => v.id !== action.payload);
    },
    sortVehicles(state, action) {
      state.sortBy = action.payload;
      state.items.sort((a, b) => a[action.payload] - b[action.payload]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadVehicles.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(loadVehicles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadVehicles.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { addVehicle, updateVehicle, deleteVehicle, sortVehicles } =
  vehiclesSlice.actions;

export default vehiclesSlice.reducer;
