import { AppConfig } from "../../AppConfig";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { AboutMe } from "../aboutMe/AboutMe";
import styles from "./Headline.module.scss";

export const Headline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.headline}>
      <img
        src="./assets/Portrait_Verena_Tewes.jpg"
        alt={t(texts.headline.portraitImageDescription)}
        className={styles.portrait}
      />
      <div>
        <h1 className={styles.firstHeadlineText}>
          {t(texts.headline.headline_1)}
        </h1>
        <h1 className={styles.secondHeadlineText}>
          {t(texts.headline.headline_2)}
        </h1>
        <h1 className={styles.thirdHeadlineText}>
          {t(texts.headline.headline_3)}
        </h1>
      </div>
      <div className={styles.contactAndAboutMe}>
        <a href={`mailto:${AppConfig.MY_EMAIL}`} className={styles.contactMe}>
          Contact me
        </a>
        <AboutMe className={styles.aboutMe} />
      </div>
    </div>
  );
};
