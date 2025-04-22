import { PositionProps } from ".";

const Input = ({ top, left, onDrop, onDragStart }: PositionProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
      }}
      draggable="true"
      onDrop={onDrop}
      onDragStart={onDragStart}
      onDragOver={(e) => e.preventDefault()}
      className="select-none"
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
