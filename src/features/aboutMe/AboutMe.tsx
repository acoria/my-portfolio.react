import styles from "./AboutMe.module.scss";
import { Education } from "./education/Education";
import { IAboutMeProps } from "./IAboutMeProps";
import { Languages } from "./languages/Languages";

export const AboutMe: React.FC<IAboutMeProps> = (props) => {
  return (
    <div className={styles.aboutMe}>
      <Languages />
      <Education />
    </div>
  );
};
