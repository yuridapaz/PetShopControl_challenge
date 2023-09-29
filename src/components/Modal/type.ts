export type ModalProps = {
  modalTitle: string;
  displayModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
