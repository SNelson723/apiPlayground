type FooterProps = {
  max: number;
  min: number;
  median: number;
  avg: number;
};

const SampleFooter = ({ max, min, median, avg }: FooterProps) => {
  return (
    <div className="flex justify-between items-center w-full h-full p-4 bg-gray-100">
      <p className="font-semibold">TTL</p>
      <p>Max: {max}</p>
      <p>Min: {min}</p>
      <p>Median: {median}</p>
      <p>Avg: {avg}</p>
    </div>
  );
};

export default SampleFooter;
