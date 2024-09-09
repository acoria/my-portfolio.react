import { AboutMeItem } from "../aboutMeItem/AboutMeItem";
import styles from "./Education.module.scss";
import { ReactComponent as EducationIcon } from "../../../assets/aboutMe/education.svg";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../hooks/useTranslation/texts";

export const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutMeItem
      icon={<EducationIcon className={styles.icon} />}
      title={t(texts.aboutMe.education.title)}
    >
      <div>{t(texts.aboutMe.education.degree)}</div>
    </AboutMeItem>
  );
};
