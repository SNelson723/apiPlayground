import { convertUSD } from "../../../utils";

type FooterProps = {
  max: number;
  min: number;
  median: number;
  avg: number;
};

const SampleFooter = ({ max, min, median, avg }: FooterProps) => {
  return (
    <div className="flex font-semibold justify-between items-center w-full h-full p-4 bg-gray-100">
      <p className="font-semibold">TTL</p>
      <p>Max: {convertUSD(max).split(".")[0]}</p>
      <p>Min: {convertUSD(min).split(".")[0]}</p>
      <p>Median: {convertUSD(median).split(".")[0]}</p>
      <p>Avg: {convertUSD(avg).split(".")[0]}</p>
    </div>
  );
};

export default SampleFooter;
