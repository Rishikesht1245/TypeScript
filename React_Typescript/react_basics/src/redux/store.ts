// // without using create slice

// import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

// // creating reducer using create reducer
// interface InitialStateType {
//   count: number;
// }
// // for avoiding spelling mistakes
// export const increment = createAction("increment");
// export const decrement = createAction("decrement");
// const initialState: InitialStateType = {
//   count: 0,
// };
// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase("increment", (state) => {
//       state.count += 1;
//     })
//     .addCase("decrement", (state) => {
//       state.count -= 1;
//     });
// });
// // configure store
// export const store = configureStore({
//   reducer: {
//     root: rootReducer,
//   },
// });

// =========== with create slice method ======== //

import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  count: number;
}

const initialState: InitialStateType = {
  count: 0,
};

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;
// export const reducer = rootSlice.reducer;
export const store = configureStore({ reducer: rootSlice.reducer });
