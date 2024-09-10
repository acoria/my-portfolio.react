import { AboutMeItem } from "../aboutMeItem/AboutMeItem";
import styles from "./Education.module.scss";
import { ReactComponent as EducationIcon } from "../../../assets/aboutMe/education.svg";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../hooks/useTranslation/texts";
import { useRenderMonth } from "../../../hooks/useRenderMonth";
import { Month } from "../../../core/types/Month";

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const render = useRenderMonth();

  return (
    <AboutMeItem
      icon={<EducationIcon className={styles.icon} />}
      title={t(texts.aboutMe.education.title)}
    >
      <div className={styles.content}>
        <div className={styles.date}>{`${render(Month.OCTOBER, true)} 2009 - ${render(
          Month.SEPTEMBER,
          true
        )} 2012`}</div>
        <div className={styles.university}>
          {t(texts.aboutMe.education.university)}
        </div>
        <div className={styles.degreeLabel}>
          {t(texts.aboutMe.education.degreeLabel)}
        </div>
        <div>{t(texts.aboutMe.education.degree)}</div>
      </div>
    </AboutMeItem>
  );
};
