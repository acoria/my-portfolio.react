import styles from "./Skills.module.scss";
import { ISkill } from "../../shared/model/ISkill";
import { Background } from "../background/Background";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills: ISkill[] = [
    {
      title: t(texts.skills.highQualitySoftware.title),
      descriptions: [
        t(texts.skills.highQualitySoftware.descriptions.years),
        t(texts.skills.highQualitySoftware.descriptions.tests),
      ],
    },
    {
      title: t(texts.skills.easyToUse.title),
      descriptions: [
        t(texts.skills.easyToUse.descriptions.users),
        t(texts.skills.easyToUse.descriptions.leanUX),
      ],
    },
    {
      title: t(texts.skills.futureSave.title),
      descriptions: [t(texts.skills.futureSave.descriptions.architecture)],
    },
    {
      title: t(texts.skills.projectManagement.title),
      descriptions: [
        t(texts.skills.projectManagement.descriptions.management),
        t(texts.skills.projectManagement.descriptions.scrum),
      ],
    },
    {
      title: "Presentations and meeting..",
      descriptions: [
        "Efficient meetings through structured agenda and preparation",
      ],
    },
    {
      title: "Development of complex business software",
      descriptions: ["..."],
    },
    { title: "Project management & organization", descriptions: ["..."] },
  ];

  return (
    <div className={styles.skillsWrapper}>
      <Background />
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill.title}>
            <h1 className={styles.title}>{skill.title}</h1>
            <p className={styles.description}>
              {skill.descriptions.join("\n")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
