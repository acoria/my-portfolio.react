import { style } from "../../core/utils/style";
import { Language as Languages } from "../../hooks/useLanguage/types/Language";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { LanguageConfig } from "../../i18n/LanguageConfig";
import { AppRoutes } from "../../routes/AppRoutes";
import { ILanguageProps } from "./ILanguageProps";
import styles from "./Language.module.scss";

export const Language: React.FC<ILanguageProps> = (props) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLanguage();
  const absoluteLanguagePath = `${AppRoutes.products.toPath()}/${
    LanguageConfig.language
  }`;

  return (
    <div className={style(styles.language, props.className)}>
      <button
        className={style(
          styles.button,
          language === Languages.DE ? styles.selected : ""
        )}
        onClick={() => {
          process.env.NODE_ENV === "production"
            ? setLanguage(Languages.DE)
            : (window.location.href = absoluteLanguagePath);
        }}
      >
        {t(texts.languageAbbreviations.de)}
      </button>
      {`|`}
      <button
        className={style(
          styles.button,
          language === Languages.EN ? styles.selected : ""
        )}
        onClick={() => {
          process.env.NODE_ENV === "production"
            ? setLanguage(Languages.EN)
            : (window.location.href = absoluteLanguagePath);
        }}
      >
        {t(texts.languageAbbreviations.en)}
      </button>
    </div>
  );
};
