import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./AboutMe.module.scss";
import { IAboutMeProps } from "./IAboutMeProps";
export const AboutMe: React.FC<IAboutMeProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.className}>
      <div className={styles.quote}>
        <h2 className={styles.quotationMarkLeft}>"</h2>
        <p className={styles.aboutMeQuote}>
          {t(texts.aboutMe.introductionText)}
        </p>
        <h2 className={styles.quotationMarkRight}>"</h2>
      </div>
    </div>
  );
};
