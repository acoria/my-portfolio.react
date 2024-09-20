import { style } from "../../core/utils/style";
import { ILoadingSpinnerProps } from "./ILoadingSpinnerProps";
import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (props) => {
  return (
    <span className={style(styles.loadingSpinner, props.className)}></span>
  );
};
