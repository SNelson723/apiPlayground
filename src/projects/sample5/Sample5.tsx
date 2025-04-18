import Card from "./card/cardContext";
import HeaderSample from "./card/HeaderSample";
import BodySample from "./card/BodySample";
import FooterSample from "./card/FooterSample";
import { Progress } from "./card/BodySample";

const Sample5 = () => {
  // move this to Sample5.tsx
  const getAverage = (arr: Progress[]) => {
    if (!arr.length) return 0;
    const sum = arr.reduce((acc, val) => acc + val.current, 0);
    return sum / arr.length;
  }

  // move this to Sample5.tsx as well or a utils file
  const getMedian = (arr: Progress[]) => {
    if (!arr.length) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 !== 0) {
      // Odd number of elements
      return sorted[mid].current;
    } else {
      // Even number of elements
      return (sorted[mid - 1].current + sorted[mid].current) / 2;
    }
  }
  return (
    <div className="w-screen">
      <div className="w-full flex flex-col items-center gap-8 mt-12">
        <h1 className="text-2xl font-bold">Sample 5</h1>
        <div className="w-full px-20 md:px-0 md:w-1/3 transition-all duration-300">
          <Card subHeader="Quarterly Report or sum shit">
            <Card.Header>
              <HeaderSample />
            </Card.Header>
            <Card.Body>
              <BodySample />
            </Card.Body>
            <Card.Footer>
              <FooterSample />
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sample5;
