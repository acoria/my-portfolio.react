import { Link } from "../../components/link/Link";
import { style } from "../../core/utils/style";
import { IProductButtonProps } from "./IProductButtonProps";
import styles from "./ProductButton.module.scss";

export const ProductButton: React.FC<IProductButtonProps> = (props) => {
  return (
    <Link
      to={props.linkTo}
      className={style(styles.productButton, props.className)}
      openInNewTab
    >
      {props.icon && props.icon}
      <div className={styles.text}>{props.children}</div>
    </Link>
  );
};
