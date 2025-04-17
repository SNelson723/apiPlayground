import { useRef, useState } from "react";
import Modal, { ModalHandle } from "./modal/ModalContainer";
import TestModal1 from "./modal/TestModal1";
import TestModal2 from "./modal/TestModal2";

const Sample4 = () => {
  const modal = useRef<ModalHandle>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="bg-slate-600 mt-12 w-full flex flex-col gap-6 justify-center items-center">
      <div>Sliding Modals</div>
      <div id="modal-root">
        <button
          className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(!showModal)}
        >
          {showModal ? "Hide" : "Show"} Modal
        </button>
        {showModal && (
          <Modal
            ref={modal}
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            <TestModal1 />
            <TestModal2 />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Sample4;
