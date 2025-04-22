import React from "react";

export interface PositionProps {
  top: number;
  left: number;
  width: number;
  height: number;
}

const Input: React.FC<PositionProps> = ({ top, left, width, height }) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
      }}
    >
      <label className="text-xl font-bold">Input</label>
      <input
        type="text"
        className="my-2 border px-2 py-1"
        placeholder="Input"
      />
    </div>
  );
};

export default Input;
