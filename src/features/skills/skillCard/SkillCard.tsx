import { ISkill } from "../../../shared/model/ISkill";
import { ISkillCardProps } from "./ISkillCardProps";
import styles from "./SkillCard.module.scss";

export const SkillCard: React.FC<ISkillCardProps> = (props) => {

  const skillContent = (skill: ISkill) => (
    <div className={styles.descriptions}>
      {skill.descriptions.map((description) => (
        <div key={description} className={styles.description}>{description}</div>
      ))}
    </div>
  );

  return (
    <div className={styles.skillCard}>
      <div className={styles.topCard}>
        <h1 className={styles.title}>{props.skill.title}</h1>
      </div>
      <div className={styles.bottomCard}>{skillContent(props.skill)}</div>
    </div>
  );
};
