import { useEffect, useState, type HTMLAttributes } from "react";
import { convertUSD } from "../../utils";

type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  current: number;
  goal: number;
};

const getColorClass = (progress: number) => {
  if (progress < 50) return "bg-red-500 text-red-500";
  if (progress < 75) return "bg-yellow-500 text-yellow-500";
  return "bg-emerald-500 text-emerald-500";
};

const ProgressBar = ({ current, goal, ...rest }: ProgressBarProps) => {
  const [progress, setProgress] = useState<number>(0);

  // Calculate the raw percentage (can be over 100)
  const getRawPercent = () => {
    if (goal <= 0) return 0;
    return Math.round((current / goal) * 100);
  };

  // Clamp for the bar fill (never over 100)
  const getClampedPercent = () => {
    if (goal <= 0) return 0;
    const percent = Math.round(
      (Math.max(0, Math.min(current, goal)) / goal) * 100
    );
    return Math.min(100, Math.max(0, percent));
  };

  useEffect(() => {
    setProgress(getClampedPercent());
  }, [current, goal]);

  const rawPercent = getRawPercent();
  const colorClass = getColorClass(progress);
  if (colorClass) console.log(colorClass);

  return (
    <div {...rest}>
      <div
        className={`mb-1 flex gap-2 items-end text-sm font-semibold ${
          colorClass.split(" ")[1]
        }`}
      >
        <div className="border-2 rounded-full py-1.5 px-0.5 border-black text-sm bg-white">
          {rawPercent}%
        </div>
        <div className="grid grid-cols-2 ">
          <div className="text-black">
            Current: {convertUSD(current).split(".")[0]}
          </div>
          <div className="text-black">
            Remaining: {convertUSD(goal - current).split(".")[0]}
          </div>
          <div className="text-black">
            Goal: {convertUSD(goal).split(".")[0]}
          </div>
          <div className="text-black">{100 - rawPercent}</div>
        </div>
      </div>
      <div className="h-7 w-full border-2 border-fuchsia-400 bg-slate-50 rounded-full overflow-hidden my-2">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full transition-all rounded-r-full duration-300 ease-in-out ${
            colorClass.split(" ")[0]
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
