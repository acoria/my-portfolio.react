import styles from "./Background.module.scss";
import { ReactComponent as SpikeShapes } from "../../assets/background/SpikeShapes.svg";
import { ReactComponent as SpikeShapesSmall } from "../../assets/background/SpikeShapesSmallScreen.svg";
import { useScreenSize } from "../../hooks/useScreenSize";

export const Background = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <div className={styles.background}>
      {isSmallScreen && <SpikeShapesSmall />}
      {!isSmallScreen && <SpikeShapes />}
    </div>
  );
};
