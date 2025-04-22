import { HTMLAttributes } from "react";
import { ComponentId } from "../features/appSlice";
import Button from "./Button";
import Input from "./Input";

export type PositionProps = {
  top: number;
  left: number;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
} & HTMLAttributes<HTMLDivElement>;

export const componentMap: Record<ComponentId, React.FC<PositionProps>> = {
  button: Button,
  input: Input,
};