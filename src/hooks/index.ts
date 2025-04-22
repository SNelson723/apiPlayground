import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// ^ Import the hooks from react-redux.
// - useDispatch: lets you dispatch actions to the Redux store.
// - useSelector: lets you select (read) data from the Redux store.
// - TypedUseSelectorHook: a TypeScript utility type to help type your selector hook.

import type { RootState, AppDispatch } from "../store";
// ^ Import your RootState and AppDispatch types from your store file.
// - RootState: describes the shape of your Redux state tree.
// - AppDispatch: describes your store's dispatch function type, which may include thunks or other middleware types.

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// ^ This is a custom hook that returns a typed version of useDispatch.
// - By default, useDispatch is not aware of thunks or custom middleware types.
// - By specifying <AppDispatch>, TypeScript knows the correct dispatch signature for your app.
// - This avoids the need to manually type dispatch in every component, and ensures type safety when dispatching actions (including async thunks).

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// ^ This is a custom hook that returns a typed version of useSelector.
// - By using TypedUseSelectorHook<RootState>, TypeScript knows the shape of your Redux state.
// - This means your selector functions will be type-checked, and you get autocompletion and type safety for state slices.
// - It also avoids the need to manually type the state parameter in every selector function.[3][6][7][10]

// Why is this needed?
// - Using these custom hooks is a best practice for React Redux with TypeScript.
// - They centralize your typing logic, reduce repetition, and provide a safer, more developer-friendly experience throughout your app.[3][6][7][10]
