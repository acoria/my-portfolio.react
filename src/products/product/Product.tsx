import { AppConfig } from "../../AppConfig";
import { Link } from "../../components/link/Link";
import { BuyMeACoffeeLink } from "../../features/buyMeACoffeeLink/BuyMeACoffeeLink";
import { GooglePlay } from "../../features/googlePlay/GooglePlay";
import { ProductButton } from "../../features/productButton/ProductButton";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IProductProps } from "./IProductProps";
import styles from "./Product.module.scss";

export const Product: React.FC<IProductProps> = (props) => {
  const { t } = useTranslation();

  const coProducers = (
    <div className={styles.coProducers}>
      <span>{t(texts.product.coProducedBy)}</span>
      {props.product.coProducers?.map((coProducer) => {
        return coProducer.profileLink ? (
          <Link
            to={coProducer.profileLink}
            className={styles.coProducerLink}
            openInNewTab
          >
            {coProducer.name}
          </Link>
        ) : (
          <span>{coProducer.name}</span>
        );
      })}
    </div>
  );

  const description = (
    <div className={styles.description}>
      {props.product.description?.map((description) => (
        <div>{description}</div>
      ))}
    </div>
  );

  const image = (
    <img
      src={props.product.imageLink}
      className={styles.image}
      alt={t(texts.product.productImageDescription)}
    />
  );

  return (
    <div className={styles.product}>
      {props.product.linkToProduct ? (
        <Link to={props.product.linkToProduct} openInNewTab>
          {image}
        </Link>
      ) : (
        image
      )}
      <div className={styles.productInfo}>
        <h2 className={styles.title}>{props.product.title}</h2>
        {props.product.coProducers && coProducers}
        {description}
        <div className={styles.buttons}>
          {props.product.showContactForDemo && (
            <ProductButton linkTo={`mailto:${AppConfig.MY_EMAIL}`}>
              <div>{t(texts.product.interestedInADemo)}</div>
              <div>{t(texts.product.contactForDemo)}</div>
            </ProductButton>
          )}
          {props.product.linkToGooglePlayStore && (
            <GooglePlay
              className={styles.googlePlayStoreLink}
              link={props.product.linkToGooglePlayStore}
            />
          )}
          {props.product.receiveDonations && <BuyMeACoffeeLink />}
        </div>
      </div>
    </div>
  );
};
