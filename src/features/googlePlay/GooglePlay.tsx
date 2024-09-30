import { Link } from "../../components/link/Link";
import { Language } from "../../hooks/useLanguage/types/Language";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IGooglePlayProps } from "./IGooglePlayProps";
import styles from "./GooglePlay.module.scss";
import { style } from "../../core/utils/style";

export const GooglePlay: React.FC<IGooglePlayProps> = (props) => {
  const { t } = useTranslation();
  const [language] = useLanguage();

  return (
    <Link to={props.link} className={styles.link}>
      <img
        src={
          language === Language.DE
            ? "../assets/icons/googlePlay_de.png"
            : "../assets/icons/googlePlay_en.png"
        }
        alt={t(texts.googlePlay.getItOnGooglePlay)}
        className={style(styles.googlePlay, props.className)}
      />
    </Link>
  );
};
