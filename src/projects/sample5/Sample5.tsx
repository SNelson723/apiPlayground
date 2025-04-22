import Card from "./card/cardContext";
import HeaderSample from "./card/HeaderSample";
import BodySample from "./card/BodySample";
import FooterSample from "./card/FooterSample";
import { getAverage, getMedian } from "../../utils";
import { Progress } from "../../interfaces";


const data: Progress[] = [
  { current: 4600, goal: 5024, speed: 50 },
  { current: 1800, goal: 3621, speed: 50 },
  { current: 560, goal: 1964, speed: 50 },
  { current: 3170, goal: 4000, speed: 50 },
];

const Sample5 = () => {

  const avg = getAverage(data);
  const median = getMedian(data);
  const max = Math.max(...data.map((d) => d.current));
  const min = Math.min(...data.map((d) => d.current));

  return (
    <div className="w-screen">
      <div className="w-full flex flex-col items-center gap-8 mt-12">
        <h1 className="text-2xl font-bold">Sample 5</h1>
        <div className="w-full px-20 md:px-0 md:w-1/3 transition-all duration-300">
          <Card subHeader="Quarterly Report or sum shit">
            <Card.Header>
              <HeaderSample />
            </Card.Header>
            <Card.Body onClick={() => console.log("clicked")}>
              <BodySample data={data} />
            </Card.Body>
            <Card.Footer>
              <FooterSample max={max} min={min} median={median} avg={avg} />
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sample5;
