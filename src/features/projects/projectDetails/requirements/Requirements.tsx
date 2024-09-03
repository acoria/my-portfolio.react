import { IRequirementsProps } from "./IRequirementsProps";
import styles from "./Requirements.module.scss";

export const Requirements: React.FC<IRequirementsProps> = (props) => {
  const requirements = props.requirements.map((requirement, index) => (
    <li key={index}>{requirement}</li>
  ));

  return (
    <div className={styles.requirements}>
      <ul className={styles.list}>{requirements}</ul>
    </div>
  );
};
