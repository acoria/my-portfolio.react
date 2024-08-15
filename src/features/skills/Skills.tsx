import styles from "./Skills.module.scss";
import { ISkill } from "../../shared/model/ISkill";
import { Background } from "../background/Background";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { text } from "stream/consumers";

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
      title: t(texts.skills.complexBusinessSoftware.title),
      descriptions: [
        t(texts.skills.complexBusinessSoftware.descriptions.usableByAnyone),
        t(texts.skills.complexBusinessSoftware.descriptions.complexToEasy),
      ],
    },
    {
      title: t(texts.skills.meetings.title),
      descriptions: [
        t(texts.skills.meetings.descriptions.liveIsShort),
        t(texts.skills.meetings.descriptions.meTakeCare),
        t(texts.skills.meetings.descriptions.planning),
      ],
    },
  ];

  return (
    <div className={styles.skillsWrapper}>
      <Background />
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill.title}>
            <h1 className={styles.title}>{skill.title}</h1>
            <ul className={styles.skillList}>
              {skill.descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
            {/* <p className={styles.description}>
              {skill.descriptions.join("\n")}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
