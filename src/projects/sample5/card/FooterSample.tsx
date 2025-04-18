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
      {/* <p className="font-semibold">TTL</p>
      {/* <p>Max: 92%</p>
      <p>Min: 29%</p>
      <p>Median: 60.5%</p>
      <p>Avg:</p> */}
    </div>
  );
};

export default SampleFooter;
