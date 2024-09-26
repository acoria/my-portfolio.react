import { AppConfig } from "../../AppConfig";
import { ReactComponent as XingIcon } from "../../assets/icons/xing_icon.svg";
import { style } from "../../core/utils/style";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ISocialMediaProps } from "./ISocialMediaProps";
import styles from "./SocialMedia.module.scss";

export const SocialMedia: React.FC<ISocialMediaProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={style(styles.socialMedia, props.className)}>
      <a
        href={AppConfig.PROFILE_LINK_LINKEDIN}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <img
          src="./assets/icons/linkedIn.png"
          alt={t(texts.socialMedia.linkedInIconDescription)}
          className={styles.linkedInIcon}
        />
      </a>
      <a
        href={AppConfig.PROFILE_LINK_XING}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <XingIcon />
      </a>
    </div>
  );
};
