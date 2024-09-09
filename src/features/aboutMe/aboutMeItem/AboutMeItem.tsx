import { IAboutMeItemProps } from "./IAboutMeItemProps";
import styles from "./AboutMeItem.module.scss";

export const AboutMeItem: React.FC<IAboutMeItemProps> = (props) => {
  return (
    <div className={styles.aboutMeItem}>
      <div className={styles.iconAndTitle}>
        {props.icon}
        <h4 className={styles.title}>{props.title}</h4>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
