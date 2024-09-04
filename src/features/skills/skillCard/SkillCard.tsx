import { SkillContent } from "../skillContent/SkillContent";
import { ISkillCardProps } from "./ISkillCardProps";
import styles from "./SkillCard.module.scss";

export const SkillCard: React.FC<ISkillCardProps> = (props) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.topCard}>
        <h1 className={styles.title}>{props.skill.title}</h1>
      </div>
      <div className={styles.bottomCard}>
        <SkillContent skill={props.skill} />
      </div>
    </div>
  );
};
