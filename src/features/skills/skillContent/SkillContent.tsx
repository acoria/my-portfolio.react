import { ISkillContentProps } from "./ISkillContentProps";
import styles from "./SkillContent.module.scss";

export const SkillContent: React.FC<ISkillContentProps> = (props) => {
  return (
    <div className={styles.skillContent}>
      {props.skill.descriptions.map((description) => (
        <div key={description} className={styles.description}>
          {description}
        </div>
      ))}
    </div>
  );
};
