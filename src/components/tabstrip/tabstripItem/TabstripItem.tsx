import { style } from "../../../core/utils/style";
import { ITabstripItemProps } from "./ITabstripItemProps";
import styles from "./TabstripItem.module.scss";

export const TabstripItem: React.FC<ITabstripItemProps> = (props) => {
  return (
    <div onClick={props.onClick} className={styles.tabstripItem}>
      <div
        className={style(
          styles.caption,
          props.selected ? styles.selected : "",
          props.selected ? props.classNameSelected : ""
        )}
      >
        {props.caption}
      </div>
    </div>
  );
};
