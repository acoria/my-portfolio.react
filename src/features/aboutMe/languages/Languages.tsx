import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { AboutMeItem } from "../aboutMeItem/AboutMeItem";
import styles from "./Languages.module.scss";
import { ReactComponent as LanguagesIcon } from "../../../assets/aboutMe/languages.svg";

export const Languages: React.FC = () => {
  const { t } = useTranslation();
  return (
    <AboutMeItem
      title={t(texts.aboutMe.languages.title)}
      icon={<LanguagesIcon className={styles.icon} />}
    >
      <div className={styles.content}>
        <div>{t(texts.aboutMe.languages.german)}</div>
        <div>{`| ${t(texts.aboutMe.languages.native)}`}</div>
        <div>{t(texts.aboutMe.languages.english)}</div>
        <div>{`| ${t(texts.aboutMe.languages.fluent)}`}</div>
      </div>
    </AboutMeItem>
  );
};
