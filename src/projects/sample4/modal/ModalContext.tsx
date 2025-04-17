import { createContext, useContext } from "react";

type ModalStepContextType = {
  onClose: () => void;
  next: () => void;
  prev: () => void;
  idx: number;
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
