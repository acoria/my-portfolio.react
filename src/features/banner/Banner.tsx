import { AppConfig } from "../../AppConfig";
import { Quote } from "../../components/quote/Quote";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./Banner.module.scss";
import { useScreenSize } from "../../hooks/useScreenSize";
import { SocialMedia } from "../socialMedia/SocialMedia";

export const Banner: React.FC = () => {
  const { t } = useTranslation();
  const { isMediumScreen, isLargeScreen } = useScreenSize();

  return (
    <div className={styles.banner}>
      {(isLargeScreen) && (
        <SocialMedia className={styles.socialMedia} />
      )}
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
          <a href={`mailto:${AppConfig.MY_EMAIL}`} className={styles.contactMe}>
            {t(texts.banner.contactMe)}
          </a>
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
