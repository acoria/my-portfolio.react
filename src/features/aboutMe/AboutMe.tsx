import { IAboutMeProps } from "./IAboutMeProps";
import styles from "./AboutMe.module.scss";
import { AboutMeItem } from "./aboutMeItem/AboutMeItem";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { ReactComponent as LanguagesIcon } from "../../assets/aboutMe/languages.svg";

export const AboutMe: React.FC<IAboutMeProps> = (props) => {
  const { t } = useTranslation();

  const languages = (
    <AboutMeItem
      title={t(texts.aboutMe.languages.title)}
      icon={<LanguagesIcon className={styles.icon} />}
    >
      <div>{t(texts.aboutMe.languages.german)}</div>
      <div>{t(texts.aboutMe.languages.english)}</div>
    </AboutMeItem>
  );

  return <div className={styles.aboutMe}>{languages}</div>;
};
