import styles from "./SocialMedia.module.scss";
import { ReactComponent as XingIcon } from "../../assets/icons/xingIcon.svg";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { ISocialMediaProps } from "./ISocialMediaProps";
import { style } from "../../core/utils/style";

export const SocialMedia: React.FC<ISocialMediaProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={style(styles.socialMedia, props.className)}>
      <img
        src="./assets/icons/linkedIn.png"
        alt={t(texts.socialMedia.linkedInIconDescription)}
        className={styles.linkedInIcon}
      />
      <XingIcon className={styles.xingIcon} />
    </div>
  );
};
