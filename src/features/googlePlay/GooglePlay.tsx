import { IGooglePlayProps } from "./IGooglePlayProps";
import styles from "./GooglePlay.module.scss";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";
import { Language } from "../../hooks/useLanguage/types/Language";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { style } from "../../core/utils/style";

export const GooglePlay: React.FC<IGooglePlayProps> = (props) => {
  const { t } = useTranslation();
  const [language] = useLanguage();

  return (
    <img
      src={
        language === Language.DE
          ? "./assets/icons/googlePlay_de.png"
          : "./assets/icons/googlePlay_en.png"
      }
      alt={t(texts.googlePlay.getItOnGooglePlay)}
      className={style(styles.googlePlay, props.className)}
      onClick={props.onClick}
    />
  );
};
