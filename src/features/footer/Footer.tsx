import { Tabstrip } from "../../components/tabstrip/Tabstrip";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const footerItems = [t(texts.footer.imprint), t(texts.footer.privacyPolicy)];

  const onFooterItemClick = (index: number) => {
    throw new Error("Function not implemented.");
  };

  return (
    <div className={styles.footer}>
      <Tabstrip captions={footerItems} onTabSelect={onFooterItemClick} />
    </div>
  );
};
