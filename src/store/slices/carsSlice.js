import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // action.payload === { name: 'ab', cost: 140 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // randomly generated ID
      });
    },
    removeCar(state, action) {
      // action.payload === the id of the car to remove
      state.cars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
