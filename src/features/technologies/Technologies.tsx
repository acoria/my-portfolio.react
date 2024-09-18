import styles from "./Technologies.module.scss";
import { TechStack } from "../projects/projectDetails/techStack/TechStack";
import { useTechnologiesViewModel } from "./useTechnologiesViewModel";

export const Technologies: React.FC = () => {
  const viewModel = useTechnologiesViewModel();

  return (
    <div className={styles.technologies}>
      <div className={styles.techStackList}>
        <TechStack
          technologies={viewModel.technologies}
          className={styles.techStack}
          highlightKeyTechnologies
        />
      </div>
    </div>
  );
};
