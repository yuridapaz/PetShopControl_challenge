import ReactDOM from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';

export type ModalProps = {
  modalTitle: string;
  displayModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const ModalComponent = ({ children, modalTitle, displayModal, setModal }: ModalProps) => {
  return displayModal
    ? ReactDOM.createPortal(
        <div
          className={
            'absolute inset-0 z-20 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600/50 backdrop-blur-sm'
          }
        >
          <div className="w-full max-w-sm rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-between border-b border-gray-300 p-4 dark:border-gray-300/20">
              <p className="md:text-lg"> {modalTitle} </p>
              <button
                className="rounded-full border border-gray-400 p-1 text-lg text-gray-600 dark:border-white dark:text-white"
                onClick={() => setModal(false)}
              >
                <RiCloseLine />
              </button>
            </div>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default ModalComponent;
