import React from "react";

export interface PositionProps {
  top: number;
  left: number;
  width: number;
  height: number;
}

const Button: React.FC<PositionProps> = ({ top, left, width, height }) => (
  <button
    style={{
      position: "absolute",
      top,
      left,
      width,
      height,
    }}
  >
    Button
  </button>
);

export default Button;
