
// move this to Sample5.tsx
// function getAverage(arr) {
//   if (!arr.length) return 0;
//   const sum = arr.reduce((acc, val) => acc + val, 0);
//   return sum / arr.length;
// }

// move this to Sample5.tsx as well or a utils file
// function getMedian(arr) {
//   if (!arr.length) return 0;
//   const sorted = [...arr].sort((a, b) => a - b);
//   const mid = Math.floor(sorted.length / 2);

//   if (sorted.length % 2 !== 0) {
//     // Odd number of elements
//     return sorted[mid];
//   } else {
//     // Even number of elements
//     return (sorted[mid - 1] + sorted[mid]) / 2;
//   }
// }



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