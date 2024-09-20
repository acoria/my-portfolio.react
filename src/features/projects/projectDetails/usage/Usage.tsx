import { IUsageProps } from "./IUsageProps";
import styles from "./Usage.module.scss";

export const Usage: React.FC<IUsageProps> = (props) => {
  const usages = props.usages.map((usage, index) => (
    <li key={index}>{usage}</li>
  ));

  return (
    <div className={styles.usage}>
      <ul className={styles.list}>{usages}</ul>
    </div>
  );
};
