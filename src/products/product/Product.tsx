import { Link } from "../../components/link/Link";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IProductProps } from "./IProductProps";
import styles from "./Product.module.scss";

export const Product: React.FC<IProductProps> = (props) => {
  const { t } = useTranslation();

  const description = (
    <div className={styles.description}>
      {props.product.description?.map((description) => (
        <div>{description}</div>
      ))}
    </div>
  );

  const coProducers = (
    <div className={styles.coProducers}>
      <span>{t(texts.product.coProducedBy)}</span>
      {props.product.coProducers?.map((coProducer) => {
        return coProducer.profileLink ? (
          <Link
            to={coProducer.profileLink}
            className={styles.coProducerLink}
            showInNewTab
          >
            {coProducer.name}
          </Link>
        ) : (
          <span>{coProducer.name}</span>
        );
      })}
    </div>
  );

  return (
    <div className={styles.product}>
      <Link to={props.product.linkToProduct} showInNewTab>
        <img
          src={props.product.imageLink}
          className={styles.image}
          alt={t(texts.product.productImageDescription)}
        />
      </Link>
      <div className={styles.productInfo}>
        <h2 className={styles.title}>{props.product.title}</h2>
        {props.product.coProducers && coProducers}
        {description}
        {props.product.linkToGooglePlayStore && (
          <Link
            to={props.product.linkToGooglePlayStore}
            className={styles.googlePlayStoreLink}
            showInNewTab
          >
            {t(texts.product.getTheApp)}
          </Link>
        )}
      </div>
    </div>
  );
};
