import { useRef, useContext } from "react";
import { ModalStepContext } from "./ModalContext";

const TestModal1 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useContext(ModalStepContext);

  if (!ctx) throw new Error("TestModal1 must be used within ModalStepContext");
  const { next, prev, onClose, idx } = ctx;

  const animateAndCall = (cb: () => void) => {
    if (!ref.current) return;
    ref.current.setAttribute("data-display", "closed");
    const handleAnimationEnd = () => {
      cb();
      ref.current?.removeEventListener("animationend", handleAnimationEnd);
    };
    ref.current.addEventListener("animationend", handleAnimationEnd);
  };

  console.log(idx);

  return (
    <div
      ref={ref}
      data-display="open"
      className="flex justify-center items-center flex-col gap-6 p-4 w-full rounded-lg shadow-lg data-[display=open]:animate-slidein data-[display=closed]:animate-slideout"
    >
      <div className="text-2xl">Test Modal 2!</div>
      <div className="gap-4 flex justify-center items-center">
        <button
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => animateAndCall(prev)}
        >
          Prev
        </button>
        <button
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => animateAndCall(next)}
        >
          Next
        </button>
        <button
          className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded"
          onClick={() => animateAndCall(onClose)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TestModal1;
