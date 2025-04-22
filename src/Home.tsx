import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import {
  addComponent,
  addTesting,
  Testing,
  type ComponentId,
} from "./features/appSlice";

import WidgetContainer from "./components/WidgetContainer";
import { componentMap } from "./components";

const Home = () => {
  // redux state to keep track of the ids of components dropped into the drop zone
  const components = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  // Allow dropping by preventing default drag-over behavior
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // On drop, read the component id and add it to the dropped components state
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    const dropZone = e.currentTarget.getBoundingClientRect();
    console.log(clientX, clientY, dropZone);
    const type = e.dataTransfer.getData("componentType") as ComponentId;
    if (componentMap[type]) {
      const test: Testing = {
        id: type,
        top: clientY,
        left: clientX,
        width: dropZone.width,
        height: dropZone.height,
      };
      dispatch(addTesting(test));
      console.log("Dropped component type:", type);
      dispatch(addComponent(type));
    }
  };

  return (
    <div
      className="flex flex-col mt-12 items-center w-screen overflow-none"
      onDragOver={handleDragOver}
    >
      <WidgetContainer />
      <div
        className="mt-8 w-full max-h-[80vh] h-[80vh] border border-slate-50 p-4"
        onDrop={handleDrop}
      >
        {components.testing.map((test, idx) => {
          const DroppedComponent = componentMap[test.id];
          return DroppedComponent ? (
            <DroppedComponent
              key={idx}
              top={test.top}
              left={test.left}
              width={test.width}
              height={test.height}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Home;
