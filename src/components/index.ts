import { ComponentType } from "react";
import { ComponentId } from "../features/appSlice";
import Button from "./Button";
import Input from "./Input";

export const componentMap: Record<ComponentId, ComponentType> = {
  button: Button,
  input: Input,
};