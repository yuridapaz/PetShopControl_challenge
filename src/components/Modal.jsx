import { RiCloseLine } from 'react-icons/ri';

const ModalComponent = ({ children, modalTitle, displayModal, setModal }) => {
  return displayModal ? (
    <div
      className={
        'absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600/50'
      }
    >
      {/* Modal */}
      <div className="w-full max-w-sm rounded-lg bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-between border-b border-gray-300 p-4">
          <p> {modalTitle} </p>
          <button
            className="rounded-full border border-gray-400 p-1 text-lg text-gray-600"
            onClick={() => setModal(null)}
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
