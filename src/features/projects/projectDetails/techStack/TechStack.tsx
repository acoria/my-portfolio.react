import { ITechStackProps } from "./ITechStackProps";
import { TechnologyCollection } from "./technologyCollection/TechnologyCollection";
import styles from "./TechStack.module.scss";

export const TechStack: React.FC<ITechStackProps> = (props) => {
  return (
    <div className={styles.techStack}>
      {props.technologies.map((technology) => (
        <TechnologyCollection technology={technology} />
      ))}
    </div>
  );
};
