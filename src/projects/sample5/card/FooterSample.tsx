
const SampleFooter = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
}

export default SampleFooter;