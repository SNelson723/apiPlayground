import { createContext, useContext } from "react";

type ModalStepContextType = {
  idx: number;
  setIdx: (idx: number) => void;
  next: () => void;
  prev: () => void;
};

export const ModalStepContext = createContext<ModalStepContextType | undefined>(
  undefined
);

export const useModalStep = () => {
  const ctx = useContext(ModalStepContext);
  if (!ctx)
    throw new Error("useModalStep must be used within ModalStepContext");
  return ctx;
};
