import { createPortal } from "react-dom";
import { IModalProps } from "./IModalProps";
import styles from "./Modal.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { Button } from "../button/Button";

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
          {props.displayCloseButton && (
            <Button className={styles.closeButton}>
              <CloseIcon
                className={styles.closeIcon}
                onClick={props.onCloseButtonClick}
              />
            </Button>
          )}
          <div className={styles.children}>{props.children}</div>
        </div>
      )}
    </>
  );

  return createPortal(content, document.getElementById("modal")!);
};
