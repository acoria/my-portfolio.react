import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { LanguageConfig } from "../../i18n/LanguageConfig";
import { AppRoutes } from "../../routes/AppRoutes";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerItems = [t(texts.footer.imprint), t(texts.footer.privacyPolicy)];

  const onFooterItemClick = (index: number) => {
    switch (index) {
      case 0: {
        window.location.href = `${
          LanguageConfig.language
        }${AppRoutes.imprint.toPath()}`;
        break;
      }
      case 1: {
        window.location.href = `${
          LanguageConfig.language
        }${AppRoutes.privacyPolicy.toPath()}`;
        break;
      }
      default:
        throw new Error("Missing route in footer. Add a route to navigate to.");
    }
  };

  return (
    <div className={styles.footer}>
      <Tabstrip captions={footerItems} onTabSelect={onFooterItemClick} />
    </div>
  );
};
