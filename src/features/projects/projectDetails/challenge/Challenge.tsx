import { IChallengeProps } from "./IChallengeProps";
import styles from "./Challenge.module.scss";

export const Challenge: React.FC<IChallengeProps> = (props) => {
  return <p className={styles.challenge}>{props.text}</p>;
};
