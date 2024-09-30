import { AppConfig } from "../../AppConfig";
import { Quote } from "../../components/quote/Quote";
import { useScreenSize } from "../../hooks/useScreenSize";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { SocialMedia } from "../socialMedia/SocialMedia";
import styles from "./Banner.module.scss";
import { AppRoutes } from "../../routes/AppRoutes";
import { Link } from "../../components/link/Link";
import { LanguageConfig } from "../../i18n/LanguageConfig";

export const Banner: React.FC = () => {
  const { t } = useTranslation();
  const { isLargeScreen } = useScreenSize();

  const contactAndProducts = (
    <div className={styles.contactAndProducts}>
      <Link to={`mailto:${AppConfig.MY_EMAIL}`} className={styles.contactMe}>
        {t(texts.banner.contactMe)}
      </Link>
      <Link
        to={`${AppRoutes.products.toPath()}/${LanguageConfig.language}`}
        className={styles.products}
      >
        {t(texts.banner.products)}
      </Link>
    </div>
  );

  return (
    <div className={styles.banner}>
      {isLargeScreen && <SocialMedia className={styles.socialMedia} />}
      <div className={styles.mainContent}>
        <img
          src="./assets/Portrait_Verena_Tewes.jpg"
          alt={t(texts.banner.portraitImageDescription)}
          className={styles.portrait}
        />
        <div>
          <h1 className={styles.firstHeadlineText}>
            {t(texts.banner.headline_1)}
          </h1>
          <h1 className={styles.secondHeadlineText}>
            {t(texts.banner.headline_2)}
          </h1>
          <h1 className={styles.thirdHeadlineText}>
            {t(texts.banner.headline_3)}
          </h1>
        </div>
        <div className={styles.contactAndMyMotivationQuote}>
          {isLargeScreen && contactAndProducts}
          {!isLargeScreen && (
            <div className={styles.contactLinks}>
              <SocialMedia />
              {contactAndProducts}
            </div>
          )}
          <Quote
            className={styles.myMotivationQuote}
            classNameQuotationMarks={styles.myMotivationQuotationMarks}
            classNameQuoteText={styles.myMotivationQuoteText}
            text={t(texts.myMotivationQuote.introductionText)}
          />
        </div>
      </div>
    </div>
  );
};
