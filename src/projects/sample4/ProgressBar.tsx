import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);
  
  useEffect(() => {
    const percent = totalProgress(); // Example percentage value
    const interval = setInterval(() => {
      setProgress((prev) => (prev < percent ? prev + 5 : prev));
    }, 100);
    return () => clearInterval(interval);

    // This dependency array will need some sort of data dependency to update the progress bar
  }, []);

  const totalProgress = () => {
    const total = 100; // Total value for the progress bar => this will need to be something like a goal amount
    const current = 50; // Current value for the progress bar => this can be dynamic with data from the backend
    return Math.round((current / total) * 100);
  };

  // const currentProgress = calculateProgress();

  return (
    <div className="h-6 w-full border-2 border-fuchsia-400 bg-slate-50 rounded-full overflow-hidden my-2">
      <div
        style={{ width: `${progress}%` }}
        className={`h-full bg-emerald-500 transition-all rounded-r-full duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default ProgressBar;
