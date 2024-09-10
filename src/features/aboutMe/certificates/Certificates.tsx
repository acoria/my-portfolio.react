import styles from "./Certificates.module.scss";
import { AboutMeItem } from "../aboutMeItem/AboutMeItem";
import { ReactComponent as CertificateIcon } from "../../../assets/aboutMe/certificate.svg";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../hooks/useTranslation/texts";

export const Certificates: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutMeItem
      icon={<CertificateIcon className={styles.icon} />}
      title={t(texts.aboutMe.certificates.title)}
    >
      <div className={styles.content}>
        <div>{t(texts.aboutMe.certificates.scrumMasterCourseId)}</div>
        <div>{`| ${t(texts.aboutMe.certificates.scrumMasterTitle)}`}</div>
        <div>{t(texts.aboutMe.certificates.scrumWithUxCourseId)}</div>
        <div>{`| ${t(texts.aboutMe.certificates.scrumWithUxTitle)}`}</div>
      </div>
    </AboutMeItem>
  );
};
