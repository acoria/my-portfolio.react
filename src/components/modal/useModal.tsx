import { ReactElement, useState } from "react";
import { Modal } from "./Modal";

export const useModal = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [children, setChildren] = useState<ReactElement | undefined>(undefined);

  const close = () => {
    setChildren(undefined);
    setDisplayModal(false);
  };

  const content = displayModal && (
    <Modal onBackdropClick={() => setDisplayModal(false)}>{children}</Modal>
  );
  const show = (content: ReactElement) => {
    setChildren(content);
    setDisplayModal(true);
  };

  return {
    close,
    content,
    show,
  };
};
