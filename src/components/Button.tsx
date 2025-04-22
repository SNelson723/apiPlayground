import { PositionProps } from ".";

const Button = ({ top, left, onDrop, onDragStart }: PositionProps) => (
  <div
    className="select-none"
    // draggable="true"
    // onDrop={onDrop}
    // onDragStart={onDragStart}
    // onDragOver={(e) => e.preventDefault()}
  >
    <button
      style={{
        position: "absolute",
        top,
        left,
      }}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Button
    </button>
  </div>
);

export default Button;
