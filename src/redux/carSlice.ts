import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { car } from "../types";

const initialState: any = {
  car: [],
};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar(state, action: PayloadAction<any>) {
      const car = state.car.filter((c: any) => c.id === action.payload.id);
      if (car.length > 0) {
        return;
      }
      state.car.push(action.payload);
    },
    removeCar(state, action: PayloadAction<number>) {
      const newCars = state.car.filter((car: car) => car.id !== action.payload);
      state.car = newCars;
    },
  },
});

export default carSlice.reducer;
export const carActions = carSlice.actions;
