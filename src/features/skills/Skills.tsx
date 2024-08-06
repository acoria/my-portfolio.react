import styles from "./Skills.module.scss";
import { ISkill } from "../../shared/model/ISkill";
import { Background } from "../background/Background";

export const Skills: React.FC = () => {
  const skills: ISkill[] = [
    {
      title: "Senior Development",
      description: "12+ years of experience in various programming languages",
    },
    {
      title: "UX/UI Design",
      description:
        "Appealing designs, Lean UX, Usability tests, UX audits. Everything to create the best UX possible",
    },
    {
      title: "Software architect",
      description:
        "A solid architecture ensures that the software is easily expandable, testable and ...",
    },
    {
      title: "Scrum Master",
      description:
        "9+ years working in various Scrum teams to find the perfect process",
    },
  ];

  return (
    <div className={styles.skillsWrapper}>
      <Background />
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill.title}>
            <h1 className={styles.title}>{skill.title}</h1>
            <p className={styles.description}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
