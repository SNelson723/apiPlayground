import ProgressBar from "../../sample4/ProgressBar";

interface Progress {
  current: number;
  goal: number;
  speed: number;
}

const data: Progress[] = [
  { current: 4600, goal: 5024, speed: 20 },
  { current: 1800, goal: 3621, speed: 20 },
  { current: 560, goal: 1964, speed: 20 },
  { current: 2300, goal: 4000, speed: 20 },
];


const BodySample = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-200">
      <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
        {data.map((progress, index) => (<ProgressBar key={index} {...progress} />))}
      </div>
    </div>
  );
};

export default BodySample;
