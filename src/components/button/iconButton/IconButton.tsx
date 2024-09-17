import { IIconButtonProps } from "./IIconButtonProps";
import styles from "./IconButton.module.scss";

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  return (
    <button className={styles.iconButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
