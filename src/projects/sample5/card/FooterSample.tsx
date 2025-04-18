
const SampleFooter = () => {
  return (
    <div className="flex justify-between items-center w-full h-full p-4 bg-gray-100">
      {/* <p className="text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p> */}
      <p className="font-semibold">TTL</p>
      <p>Max: 92%</p>
      <p>Min: 29%</p>
      <p>Median: 60.5%</p>
      <p>Avg:</p>
    </div>
  );
}

export default SampleFooter;