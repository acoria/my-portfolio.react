import styles from "./AboutMe.module.scss";
import { Certificates } from "./certificates/Certificates";
import { Education } from "./education/Education";
import { IAboutMeProps } from "./IAboutMeProps";
import { Languages } from "./languages/Languages";
import { ProfessionalExperience } from "./professionalExperience/ProfessionalExperience";

export const AboutMe: React.FC<IAboutMeProps> = (props) => {
  return (
    <div className={styles.aboutMe}>
      <ProfessionalExperience />
      <Languages />
      <Education />
      <Certificates />
    </div>
  );
};
