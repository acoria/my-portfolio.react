import styles from "./Background.module.scss";
import { ReactComponent as BackgroundShapes } from "../../assets/LogoShapes.svg";

export const Background = () => {
  return (
    <div className={styles.background}>
      <BackgroundShapes />
    </div>
  );
};
