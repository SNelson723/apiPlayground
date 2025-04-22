import { HTMLAttributes } from "react";
import { ComponentId } from "../features/appSlice";
import Button from "./Button";
import Input from "./Input";

export interface PositionProps extends HTMLAttributes<HTMLDivElement> {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const componentMap: Record<ComponentId, React.FC<PositionProps>> = {
  button: Button,
  input: Input,
};