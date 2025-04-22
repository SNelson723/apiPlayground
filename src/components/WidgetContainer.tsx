import Button, { PositionProps } from "./Button";
import Input from "./Input";

// 1. Define a union type for component IDs
type ComponentId = "button" | "input";

// 2. Define a type for the component mapping
type ComponentType = React.FC<PositionProps>;

// 3. List of available draggable components, each with an id and the actual component
const componentsList: { id: ComponentId; component: ComponentType }[] = [
  { id: "button", component: (props: PositionProps) => <Button {...props} /> },
  { id: "input", component: Input },
];

// When dragging starts, store the component's id in the drag event
const handleDragStart =
  (id: ComponentId) => (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("componentType", id);
  };

const WidgetContainer = () => {
  return (
    <div className="widget-container">
      <h1>Widget Container</h1>
      <div className="flex gap-4">
        {/* Palette of draggable components */}
        <div className="flex gap-4">
          {componentsList.map((comp) => (
            <div key={comp.id} className="flex flex-col items-center">
              <div
                className="flex items-center justify-center cursor-move"
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
