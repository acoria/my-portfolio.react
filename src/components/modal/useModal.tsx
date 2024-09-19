import { ReactElement, useState } from "react";
import { Modal } from "./Modal";

export const useModal = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCloseButton, setDisplayCloseButton] = useState(false);
  const [children, setChildren] = useState<ReactElement | undefined>(undefined);

  const close = () => {
    setChildren(undefined);
    setDisplayModal(false);
  };

  const content = displayModal && (
    <Modal
      onBackdropClick={() => setDisplayModal(false)}
      displayCloseButton={displayCloseButton}
    >
      {children}
    </Modal>
  );
  const show = (content: ReactElement, displayCloseButton?: boolean) => {
    setChildren(content);
    displayCloseButton !== undefined &&
      setDisplayCloseButton(displayCloseButton);
    setDisplayModal(true);
  };

  return {
    close,
    content,
    show,
  };
};
