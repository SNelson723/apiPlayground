import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks";
import {
  addTesting,
  updateTesting,
  type Testing,
  type ComponentId,
} from "./features/appSlice";

import WidgetContainer from "./components/WidgetContainer";
import { componentMap } from "./components";

const Home = () => {
  const components = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle dropping either a new component or moving an existing one
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { clientX, clientY } = e;

    // this is the UID of an existing component being moved => could be null if a new one is being created
    const draggedUid = e.dataTransfer.getData("uid");

    // grab the type of component being dragged from the widget container
    const type = e.dataTransfer.getData("id") as ComponentId;

    // if dragging an existing component => update its position
    if (draggedUid) {
      dispatch(updateTesting({ uid: draggedUid, top: clientY, left: clientX }));
    } else if (type && componentMap[type]) {
      // else, create one in the drop zone
      const test: Testing = {
        id: type,
        top: clientY,
        left: clientX,
        // unique ID for this new component => can be improved
        uid: Date.now().toString() + Math.random(),
      };
      dispatch(addTesting(test));
    }
  };

  // for existing components in the dashboard
  const handleDragStart =
    (uid: string) => (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("uid", uid); // stores the unique ID of the component being dragged.
    };

  return (
    <div
      className="flex flex-col mt-12 items-center w-screen overflow-none"
    >
        <WidgetContainer />
      <div
        className="mt-8 w-full max-h-[80vh] h-[80vh] border border-slate-50 p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {components.testing.map((test, idx) => {
          const DroppedComponent = componentMap[test.id];
          return DroppedComponent ? (
            <DroppedComponent
              key={idx}
              top={test.top}
              left={test.left}
              onDrop={handleDrop}
              onDragStart={handleDragStart(test.uid)}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Home;
