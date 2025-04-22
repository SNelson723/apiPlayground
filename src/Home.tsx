import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import { addComponent } from "./features/appSlice";
import type { ComponentId } from "./features/appSlice";

import WidgetContainer from "./components/WidgetContainer";
import Button from "./components/Button";
import Input from "./components/Input";

// 1. Define a union type for component IDs
// type ComponentId = "button" | "input";

// 2. Define a type for the component mapping
// type ComponentType = React.FC;

// 3. Map component ids to their actual component for rendering in the drop zone
const componentMap: Record<ComponentId, React.FC> = {
  button: Button,
  input: Input,
};

const Home: React.FC = () => {
  // State to keep track of the ids of components dropped into the drop zone
  // const [components, setComponents] = useState<ComponentId[]>([]);
  const components = useAppSelector((state) => state.app.components);
  const dispatch = useAppDispatch();

  // Allow dropping by preventing default drag-over behavior
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // On drop, read the component id and add it to the dropped components state
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("componentType") as ComponentId;
    if (componentMap[type]) {
      // replace this with redux dispatch
      dispatch(addComponent(type));
    }
  };

  return (
    <div
      className="flex flex-col mt-12 items-center w-screen"
      onDragOver={handleDragOver}
    >
      <WidgetContainer />
      <div
        className="mt-8 w-full h-[80vh] border border-slate-50 flex flex-col gap-2 items-center justify-start p-4"
        onDrop={handleDrop}
      >
        {components.map((type, idx) => {
          const DroppedComponent = componentMap[type];
          return DroppedComponent ? <DroppedComponent key={idx} /> : null;
        })}
      </div>
    </div>
  );
};

export default Home;
