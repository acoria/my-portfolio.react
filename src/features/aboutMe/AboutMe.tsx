import { useEffect } from "react";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./AboutMe.module.scss";
export const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  

  useEffect(()=>{},[])

  return (
    <div className={styles.aboutMe}>
      <img
        src="./assets/Portrait_Verena_Tewes.jpg"
        alt={t(texts.aboutMe.portraitImageDescription)}
        className={styles.portrait}
      />
      <div>
        <h1 className={styles.firstHeadline}>{t(texts.aboutMe.headline_1)}</h1>
        <h1 className={styles.secondHeadline}>{t(texts.aboutMe.headline_2)}</h1>
        <h1 className={styles.thirdHeadline}>{t(texts.aboutMe.headline_3)}</h1>
      </div>
    </div>
  );
};
