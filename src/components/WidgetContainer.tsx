import { PositionProps } from ".";
import Button from "./Button";
import Input from "./Input";

// expandable union type for component ids and the ComponetType for the components
type ComponentId = "button" | "input";
type ComponentType = React.FC<PositionProps>;

// Sample component list => should be the widgets/charts/etc
// This needs to be separate from the redux slice since this is the initial list to choose from
// and the redux slice is the list of components that are currently on the page
const componentsList: { id: ComponentId; component: ComponentType }[] = [
  { id: "button", component: (props: PositionProps) => <Button {...props} /> },
  { id: "input", component: (props: PositionProps) => <Input {...props} /> },
];

// When dragging starts, store the component's id in the drag event
const handleDragStart =
  (id: ComponentId) => (e: React.DragEvent<HTMLDivElement>) => {
    // e.dataTransfer.setData("id", id);
  };

// const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//   e.preventDefault();
// };

const WidgetContainer = () => {
  return (
    <div className="w-full flex flex-col items-center my-4 gap-2">
      <h1 className="underline font-semibold text-xl">Widget Container</h1>
      <div className="flex gap-6">
        <div className="flex gap-4">
          {componentsList.map((comp) => (
            <div key={comp.id} className="flex flex-col items-center border border-white py-1 px-4 rounded-lg cursor-pointer">
              <div
                className="flex items-center justify-center"
                draggable
                onDragStart={handleDragStart(comp.id)}
              >
                {comp.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetContainer;
