import { Progress } from "../../../interfaces";
import ProgressBar from "../../sample4/ProgressBar";

type BodySampleProps<T> = {
  data: T[];
};


const BodySample = <T,>({data}: BodySampleProps<T>) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="grid grid-cols-2 gap-6 w-full h-full p-4">
        {data.map((progress, index) => (<ProgressBar key={index} {...progress as Progress} />))}
      </div>
    </div>
  );
};

export default BodySample;
