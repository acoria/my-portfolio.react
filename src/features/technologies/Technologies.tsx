import styles from "./Technologies.module.scss";
import { TechStack } from "../projects/projectDetails/techStack/TechStack";
import { useTechnologiesViewModel } from "./useTechnologiesViewModel";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";

export const Technologies: React.FC = () => {
  const viewModel = useTechnologiesViewModel();

  return (
    <div className={styles.technologies}>
      {viewModel.isLoading && (
        <LoadingSpinner className={styles.loadingSpinner} />
      )}
      {!viewModel.isLoading && (
        <div className={styles.techStackList}>
          <TechStack
            technologies={viewModel.technologies}
            className={styles.techStack}
            highlightKeyTechnologies
          />
        </div>
      )}
    </div>
  );
};
