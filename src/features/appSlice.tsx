import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// can expand this to include more widget types in the future
export type ComponentId = "button" | "input";

export interface AppState {
  components: ComponentId[];
}

const initialState: AppState = {
  components: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<ComponentId>) => {
      state.components.push(action.payload);
    },
  },
});

export const { addComponent } = appSlice.actions;
export default appSlice.reducer;