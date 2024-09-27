import { Button } from "../../components/button/Button";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IProductProps } from "./IProductProps";
import styles from "./Product.module.scss";

export const Product: React.FC<IProductProps> = (props) => {
  const { t } = useTranslation();

  const description = props.product.description?.map((description) => (
    <div>{description}</div>
  ));

  return (
    <div className={styles.product}>
      <img
        src={props.product.imageLink}
        className={styles.image}
        alt={t(texts.product.productImageDescription)}
        onClick={() => window.open(props.product.linkToProduct, "_blank")}
      />
      <div>
        <h2 className={styles.title}>{props.product.title}</h2>
        {description}
        {props.product.linkToGooglePlayStore && <a href={props.product.linkToGooglePlayStore}>Get the app</a>}
      </div>
    </div>
  );
};
