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
          <a
            href={coProducer.profileLink}
            className={styles.coProducerLink}
            target="_blank"
            rel="noreferrer"
          >
            {coProducer.name}
          </a>
        ) : (
          <span>{coProducer.name}</span>
        );
      })}
    </div>
  );

  return (
    <div className={styles.product}>
      <a href={props.product.linkToProduct} target="_blank" rel="noreferrer">
        <img
          src={props.product.imageLink}
          className={styles.image}
          alt={t(texts.product.productImageDescription)}
        />
      </a>
      <div className={styles.productInfo}>
        <h2 className={styles.title}>{props.product.title}</h2>
        {props.product.coProducers && coProducers}
        {description}
        {props.product.linkToGooglePlayStore && (
          <a
            href={props.product.linkToGooglePlayStore}
            target="_blank"
            rel="noreferrer"
            className={styles.googlePlayStoreLink}
          >
            {t(texts.product.getTheApp)}
          </a>
        )}
      </div>
    </div>
  );
};
