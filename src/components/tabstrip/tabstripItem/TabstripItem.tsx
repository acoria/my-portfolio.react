import { style } from "../../../core/utils/style";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { ITabstripItemProps } from "./ITabstripItemProps";
import styles from "./TabstripItem.module.scss";

export const TabstripItem: React.FC<ITabstripItemProps> = (props) => {
  const { t } = useTranslation();

  return (
    <button onClick={props.onClick} className={styles.tabstripItem}>
      <div
        className={style(
          styles.caption,
          props.selected ? styles.selected : "",
          props.selected ? props.classNameSelected : ""
        )}
      >
        {t(props.caption)}
      </div>
    </button>
  );
};
