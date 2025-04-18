import { useEffect, useState, type HTMLAttributes } from "react";

type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  current: number;
  goal: number;
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
    const target = getClampedPercent();
    if (progress === target) return;

    const increment = target > progress ? 1 : -1;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (
          (increment > 0 && prev >= target) ||
          (increment < 0 && prev <= target)
        ) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [current, goal, progress]);

  const rawPercent = getRawPercent();

  return (
    <div {...rest}>
      <div className="mb-1 text-center font-semibold text-emerald-700">
        {rawPercent}%
      </div>
      <div className="h-6 w-full border-2 border-fuchsia-400 bg-slate-50 rounded-full overflow-hidden my-2">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-emerald-500 transition-all rounded-r-full duration-300 ease-in-out"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
