import { createPortal } from "react-dom";
import { IModalProps } from "./IModalProps";
import styles from "./Modal.module.scss";

export const Modal: React.FC<IModalProps> = (props) => {
  const content = (
    <>
      {props.children && (
        <div className={styles.modal}>
          <div
            className={styles.backdrop}
            onClick={(event) => {
              props.onBackdropClick?.();
              event.stopPropagation();
            }}
          />
          {props.children}
        </div>
      )}
    </>
  );

  return createPortal(content, document.getElementById("modal")!);
};
