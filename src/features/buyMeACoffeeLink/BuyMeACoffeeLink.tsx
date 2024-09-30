import { AppConfig } from "../../AppConfig";
import { ReactComponent as CoffeeToGoIcon } from "../../assets/icons/coffee_to_go.svg";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ProductButton } from "../productButton/ProductButton";
import styles from "./BuyMeACoffeeLink.module.scss";
import { IBuyMeACoffeeLinkProps } from "./IBuyMeACoffeeLinkProps";

export const BuyMeACoffeeLink: React.FC<IBuyMeACoffeeLinkProps> = (props) => {
  const { t } = useTranslation();

  return (
    <ProductButton
      linkTo={AppConfig.MY_PAYPAL_ME_LINK}
      icon={<CoffeeToGoIcon className={styles.icon} />}
    >
      <div>{t(texts.buyMeACoffee.youLikeIt)}</div>
      <div>{t(texts.buyMeACoffee.buyMeACoffee)}</div>
    </ProductButton>
  );
};
