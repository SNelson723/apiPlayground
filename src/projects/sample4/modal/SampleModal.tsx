import { Progress } from "../../../interfaces";
import BodySample from "../../sample5/card/BodySample";
import Card from "../../sample5/card/cardContext";
import FooterSample from "../../sample5/card/FooterSample";
import HeaderSample from "../../sample5/card/HeaderSample";
import { getAverage, getMedian } from "../../../utils";
const data: Progress[] = [
  { current: 4600, goal: 5024, speed: 50 },
  { current: 1800, goal: 3621, speed: 50 },
  { current: 560, goal: 1964, speed: 50 },
  { current: 2300, goal: 4000, speed: 50 },
];

import { useRef, useContext } from "react";
import { ModalStepContext } from "./ModalContext";

const TestModal3 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useContext(ModalStepContext);

  if (!ctx) throw new Error("TestModal1 must be used within ModalStepContext");
  const { next, prev, onClose, idx } = ctx;

  const avg = getAverage(data);
  const median = getMedian(data);
  const max = Math.max(...data.map((d) => d.current));
  const min = Math.min(...data.map((d) => d.current));

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
      className="flex justify-center items-center flex-col gap-4 p-4 w-full rounded-lg shadow-lg data-[display=open]:animate-slidein data-[display=closed]:animate-slideout"
    >
      <div className="w-full md:px-0 transition-all duration-300">
        <Card subHeader="Quarterly Report or sum shit">
          <Card.Header>
            <HeaderSample />
          </Card.Header>
          <Card.Body>
            <BodySample data={data} />
          </Card.Body>
          <Card.Footer>
            <FooterSample max={max} min={min} median={median} avg={avg} />
          </Card.Footer>
        </Card>
      </div>
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

export default TestModal3;
