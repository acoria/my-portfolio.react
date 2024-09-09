import { IAboutMeProps } from "./IAboutMeProps";
import styles from "./AboutMe.module.scss";

export const AboutMe: React.FC<IAboutMeProps> = (props) => {
  return <div className={styles.aboutMe}></div>;
};
