import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./MyMotivation.module.scss";
import { IMyMotivationProps } from "./IMyMotivationProps";

export const MyMotivation: React.FC<IMyMotivationProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.className}>
      <div className={styles.quote}>
        <h2 className={styles.quotationMarkLeft}>"</h2>
        <p className={styles.quoteText}>{t(texts.myMotivation.introductionText)}</p>
        <h2 className={styles.quotationMarkRight}>"</h2>
      </div>
    </div>
  );
};
