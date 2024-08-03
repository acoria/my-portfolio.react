import styles from "./Skills.module.scss";
import { ReactComponent as BackgroundShapes } from "../../assets/LogoShapes.svg";

export const Skills: React.FC = () => {
  const skills: string[] = [
    "Senior Development",
    "UX/UI Design",
    "Scrum Master",
  ];

  return (
    <div className={styles.skills}>
      <div className={styles.background}>
        <BackgroundShapes />
      </div>
      <div className={styles.content}>
        {skills.map((skill) => (
          <div className={styles.skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
