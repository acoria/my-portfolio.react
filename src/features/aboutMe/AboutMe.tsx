import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./AboutMe.module.scss";
export const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutMe}>
      <p>{t(texts.aboutMe.introductionText)}</p>
    </div>
  );
};
