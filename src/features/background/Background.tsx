import styles from "./Background.module.scss";
import { ReactComponent as SpikeShapes } from "../../assets/SpikeShapes.svg";

export const Background = () => {
  return (
    <div className={styles.background}>
      <SpikeShapes />
    </div>
  );
};
