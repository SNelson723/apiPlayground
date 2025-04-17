import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { ModalStepContext } from "./ModalContext";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  show: boolean;
  children: React.ReactNode[];
  onClose: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, onClose, show }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const [idx, setIdx] = useState(0);

    const next = () =>
      setIdx((i) => Math.min(i + 1, React.Children.count(children) - 1));
    const prev = () => setIdx((i) => Math.max(i - 1, 0));

    useImperativeHandle(ref, () => ({
      open: () => dialog.current?.showModal(),
    }));

    return createPortal(
      <dialog
        ref={dialog}
        open={show}
        className="modal w-1/3 top-1/3 flex justify-center"
        onClose={onClose}
      >
        <ModalStepContext.Provider value={{ next, prev, onClose, idx }}>
          {Array.isArray(children) ? children[idx] : children}
        </ModalStepContext.Provider>
      </dialog>,
      document.getElementById("modal-root")!
    );
  }
);

export default Modal;
