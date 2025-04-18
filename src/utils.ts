import { Progress } from "./interfaces";

// move this to Sample5.tsx
export const getAverage = (arr: Progress[]) => {
  if (!arr.length) return 0;
  const sum = arr.reduce((acc, val) => acc + val.current, 0);
  return sum / arr.length;
};

// move this to Sample5.tsx as well or a utils file
export const getMedian = (arr: Progress[]) => {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a.current - b.current);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    // Odd number of elements
    return sorted[mid].current;
  } else {
    // Even number of elements
    return (sorted[mid - 1].current + sorted[mid].current) / 2;
  }
};


  export const convertUSD = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };