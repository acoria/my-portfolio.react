import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./Headline.module.scss";

export const Headline: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe}>
      <img
        src="./assets/Portrait_Verena_Tewes.jpg"
        alt={t(texts.headline.portraitImageDescription)}
        className={styles.portrait}
      />
      <div>
        <h1 className={styles.firstHeadline}>{t(texts.headline.headline_1)}</h1>
        <h1 className={styles.secondHeadline}>{t(texts.headline.headline_2)}</h1>
        <h1 className={styles.thirdHeadline}>{t(texts.headline.headline_3)}</h1>
      </div>
    </div>
  );
};
