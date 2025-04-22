import { PositionProps } from ".";
import Button from "./Button";
import Input from "./Input";

// 1. Define a union type for component IDs
type ComponentId = "button" | "input";

// 2. Define a type for the component mapping
type ComponentType = React.FC<PositionProps>;

// 3. List of available draggable components, each with an id and the actual component
const componentsList: { id: ComponentId; component: ComponentType }[] = [
  { id: "button", component: (props: PositionProps) => <Button {...props} /> },
  { id: "input", component: (props: PositionProps) => <Input {...props} /> },
];

// When dragging starts, store the component's id in the drag event
const handleDragStart =
  (id: ComponentId) => (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("componentType", id);
  };

const WidgetContainer = () => {
  return (
    <div className="w-full flex flex-col items-center my-4 gap-2">
      <h1 className="underline font-semibold text-xl">Widget Container</h1>
      <div className="flex gap-6">
        {/* draggable components */}
        <div className="flex gap-4">
          {componentsList.map((comp) => (
            <div key={comp.id} className="flex flex-col items-center border border-white py-1 px-4 rounded-lg cursor-pointer">
              <div
                className="flex items-center justify-center"
                draggable="true"
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
