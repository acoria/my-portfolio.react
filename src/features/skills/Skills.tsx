import { useScreenSize } from "../../hooks/useScreenSize";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ISkill } from "../../shared/model/ISkill";
import { Background } from "../background/Background";
import { SkillAccordion } from "./skillAccordion/SkillAccordion";
import { SkillCard } from "./skillCard/SkillCard";
import styles from "./Skills.module.scss";

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { isSmallScreen } = useScreenSize();

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
        t(texts.skills.meetings.descriptions.planning),
      ],
    },
  ];

  return (
    <div className={styles.skillsWrapper}>
      <Background />
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          if (isSmallScreen) {
            return <SkillAccordion skill={skill} />;
          } else {
            return <SkillCard skill={skill} key={index} />;
          }
        })}
      </div>
    </div>
  );
};
