import { RiCloseLine } from "react-icons/ri";

const ModalComponent = ({ showModal, closeModal, children, modalTitle }) => {
  return showModal ? (
    <div
      className={`flex absolute justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
    >
      {/* Modal */}
      <div className=" bg-gray-100 dark:bg-gray-800 rounded-lg w-full max-w-sm">
        <div className="border-b border-gray-300 p-4 flex justify-between items-center">
          <p> {modalTitle} </p>
          <button
            className="text-lg border border-gray-400 rounded-full text-gray-600 p-1"
            onClick={closeModal}
          >
            <RiCloseLine />
          </button>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default ModalComponent;
