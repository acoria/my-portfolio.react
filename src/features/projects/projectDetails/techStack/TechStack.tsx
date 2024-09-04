import { style } from "../../../../core/utils/style";
import { ITechStackProps } from "./ITechStackProps";
import { TechnologyCollection } from "./technologyCollection/TechnologyCollection";
import styles from "./TechStack.module.scss";

export const TechStack: React.FC<ITechStackProps> = (props) => {
  return (
    <div className={style(styles.techStack, props.className)}>
      {props.technologies.map((technology, index) => (
        <TechnologyCollection key={index} technology={technology} />
      ))}
    </div>
  );
};
