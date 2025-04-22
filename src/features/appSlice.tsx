import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// can expand this to include more widget types in the future
export type ComponentId = "button" | "input";

export type Testing = {
  id: ComponentId;
  component: React.FC;
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface AppState {
  components: ComponentId[];
  testing: Testing[];
}

const initialState: AppState = {
  components: [],
  testing: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<ComponentId>) => {
      state.components.push(action.payload);
    },
    addTesting: (state, action: PayloadAction<Testing>) => {
      state.testing.push(action.payload);
    }
  },
});

export const { addComponent, addTesting } = appSlice.actions;
export default appSlice.reducer;