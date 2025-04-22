import { PositionProps } from ".";

const Button = ({ top, left }: PositionProps) => (
  <div className="select-none">
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
