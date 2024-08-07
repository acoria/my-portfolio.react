import styles from "./Skills.module.scss";
import { ISkill } from "../../shared/model/ISkill";
import { Background } from "../background/Background";

export const Skills: React.FC = () => {
  const skills: ISkill[] = [
    {
      title: "High quality software",
      description: "Senior Development: 12+ years of experience in various programming languages",
    },
    {
      title: "Appealing and easy-to-use interfaces",
      description:
        "UX/UI Design: Appealing designs, Lean UX, Usability tests, UX audits. Everything to create the best UX possible",
    },
    {
      title: "Future save",
      description:
        "Adjustments to the software are cheap. -> Software architectures: A solid architecture ensures that the software is easily expandable, testable and ...",
    },
    {
      title: "Scrum Mastering",
      description:
        "9+ years working in various Scrum teams to find the perfect process to leave everyone the most time for their job",
    },
    { title: "Presentations and meeting..", description: "Efficient meetings through structured agenda and preparation" },
    { title: "Development of complex business software", description: "..." },
    { title: "Project management & organization", description: "..." },
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
