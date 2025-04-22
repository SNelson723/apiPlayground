import { ComponentId } from "../features/appSlice";
import Button from "./Button";
import Input from "./Input";

export type PositionProps = {
  top: number;
  left: number;
};

export const componentMap: Record<ComponentId, React.FC<PositionProps>> = {
  button: Button,
  input: Input,
};
