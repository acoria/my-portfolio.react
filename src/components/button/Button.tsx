import { style } from "../../core/utils/style";
import { IIconButtonProps } from "./IButtonProps";
import styles from "./Button.module.scss";

export const Button: React.FC<IIconButtonProps> = (props) => {
  return (
    <button
      className={style(styles.button, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
