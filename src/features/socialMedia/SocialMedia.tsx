import { AppConfig } from "../../AppConfig";
import { ReactComponent as XingIcon } from "../../assets/icons/xing_icon.svg";
import { Link } from "../../components/link/Link";
import { style } from "../../core/utils/style";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ISocialMediaProps } from "./ISocialMediaProps";
import styles from "./SocialMedia.module.scss";

export const SocialMedia: React.FC<ISocialMediaProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={style(styles.socialMedia, props.className)}>
      <Link
        to={AppConfig.PROFILE_LINK_LINKEDIN}
        className={styles.link}
        openInNewTab
      >
        <img
          src="./assets/icons/linkedIn.png"
          alt={t(texts.socialMedia.linkedInIconDescription)}
          className={styles.linkedInIcon}
        />
      </Link>
      <Link to={AppConfig.PROFILE_LINK_XING} openInNewTab>
        <XingIcon className={styles.linkImage} />
      </Link>
    </div>
  );
};
