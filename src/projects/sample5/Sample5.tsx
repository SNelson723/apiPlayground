import Card from "./card/cardContext";
import HeaderSample from "./card/HeaderSample";
import BodySample from "./card/BodySample";
import FooterSample from "./card/FooterSample";

const Sample5 = () => {
  return (
    <div className="w-screen">
      <div className="w-full flex flex-col items-center gap-8 mt-12">
        <h1 className="text-2xl font-bold">Sample 5</h1>
        <div className="w-1/3">
          <Card subHeader="Quartyly Report">
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
