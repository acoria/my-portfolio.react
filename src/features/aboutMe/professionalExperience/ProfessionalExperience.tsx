import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { AboutMeItem } from "../aboutMeItem/AboutMeItem";
import styles from "./ProfessionalExperience.module.scss";
import { ReactComponent as CodingIcon } from "../../../assets/roles/coding.svg";
import { ProgrammingExperienceCalculator } from "../../../services/ProgrammingExperienceCalculator";

export const ProfessionalExperience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutMeItem
      icon={<CodingIcon className={styles.icon} />}
      title={t(texts.aboutMe.professionalExperience.title)}
    >
      <div className={styles.content}>
        <div className={styles.description}>

          <span className={styles.years}>
            {t(texts.aboutMe.professionalExperience.years, {
              programmingYears: `${ProgrammingExperienceCalculator.calculateYears()}`,
            })}
          </span>
          {` ${t(texts.aboutMe.professionalExperience.description)} ${t(
            texts.aboutMe.professionalExperience.fullStackDevelopment
          )} & ${t(texts.aboutMe.professionalExperience.uxDesign)}`}
        </div>
          
          {/* <span className={styles.years}>
            {t(texts.aboutMe.professionalExperience.years, {
              programmingYears: `${ProgrammingExperienceCalculator.calculateYears()}`,
            })}
          </span>
          {` ${t(texts.aboutMe.professionalExperience.description)}`}
        </div>
        <div style={{ fontWeight: 400 }}>
          {`${t(
            texts.aboutMe.professionalExperience.fullStackDevelopment
          )} & ${t(texts.aboutMe.professionalExperience.uxDesign)}`}
        </div> */}

        {/* <div className={styles.description}>
          <span className={styles.years}>
            {t(texts.aboutMe.professionalExperience.years, {
              programmingYears: `${ProgrammingExperienceCalculator.calculateYears()}`,
            })}
          </span>
          {` ${t(texts.aboutMe.professionalExperience.description)}`}
        </div>
        <div className={styles.skills}>
          <div>
            {t(texts.aboutMe.professionalExperience.fullStackDevelopment)}
          </div>
          <div className={styles.and}>&</div>
          <div>{t(texts.aboutMe.professionalExperience.uxDesign)}</div>
        </div> */}
      </div>
    </AboutMeItem>
  );
};
