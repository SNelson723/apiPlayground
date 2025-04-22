import React, { useState } from "react";

import WidgetContainer from "./components/WidgetContainer";
import Button from "./components/Button";
import Input from "./components/Input";

// 1. Define a union type for component IDs
type ComponentId = "button" | "input";

// 2. Define a type for the component mapping
type ComponentType = React.FC;

// 3. List of available draggable components, each with an id and the actual component
const componentsList: { id: ComponentId; component: ComponentType }[] = [
  { id: "button", component: Button },
  { id: "input", component: Input },
];

// 4. Map component ids to their actual component for rendering in the drop zone
const componentMap: Record<ComponentId, ComponentType> = {
  button: Button,
  input: Input,
};

const Home: React.FC = () => {
  // State to keep track of the ids of components dropped into the drop zone
  const [components, setComponents] = useState<ComponentId[]>([]);

  // Allow dropping by preventing default drag-over behavior
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // When dragging starts, store the component's id in the drag event
  const handleDragStart =
    (id: ComponentId) => (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("componentType", id);
    };

  // On drop, read the component id and add it to the dropped components state
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("componentType") as ComponentId;
    if (type && componentMap[type]) {
      setComponents((prev) => [...prev, type]);
    }
  };

  return (
    <div
      className="flex flex-col mt-12 items-center w-screen"
      onDragOver={handleDragOver}
    >
      {/* Optional: WidgetContainer at the top */}
      <WidgetContainer />

      {/* Palette of draggable components */}
      <div className="flex gap-4">
        {componentsList.map(({ id, component: PaletteComponent }) => (
          <div key={id} className="flex flex-col items-center">
            <h1 className="text-xl font-bold">{id}</h1>
            <div
              className="w-32 h-16 border border-slate-300 flex items-center justify-center cursor-move"
              draggable="true"
              onDragStart={handleDragStart(id)}
            >
              <PaletteComponent />
            </div>
          </div>
        ))}
      </div>

      {/* Drop zone */}
      <div
        className="mt-8 w-full h-[80vh] border border-slate-50 flex flex-col gap-2 items-center justify-start p-4"
        onDrop={handleDrop}
      >
        {components.length === 0 && (
          <span className="text-slate-400">Drop components here...</span>
        )}
        {components.map((type, idx) => {
          const DroppedComponent = componentMap[type];
          return DroppedComponent ? <DroppedComponent key={idx} /> : null;
        })}
      </div>
    </div>
  );
};

export default Home;
