import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// can expand this to include more widget types in the future
export type ComponentId = "button" | "input";

// These fields can be used to save to the database and queried later
export type Testing = {
  id: ComponentId;
  top: number;
  left: number;
  uid: string;
}

export interface AppState {
  testing: Testing[];
}

const initialState: AppState = {
  testing: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTesting: (state, action: PayloadAction<Testing>) => {
      state.testing.push(action.payload);
    },
    updateTesting: (
      state,
      action: PayloadAction<{ uid: string; top: number; left: number }>
    ) => {
      const { uid, top, left } = action.payload;
      const index = state.testing.findIndex((test) => test.uid === uid);
      if (index !== -1) {
        state.testing[index] = { ...state.testing[index], top, left };
      }
    },
  },
});

export const { addTesting, updateTesting } = appSlice.actions;
export default appSlice.reducer;