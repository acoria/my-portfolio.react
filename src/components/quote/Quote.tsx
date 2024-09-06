import { style } from "../../core/utils/style";
import { IQuoteProps } from "./IQuoteProps";
import styles from "./Quote.module.scss";

export const Quote: React.FC<IQuoteProps> = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.quote}>
        <h2
          className={style(
            styles.quotationMarkLeft,
            props.classNameQuotationMarks
          )}
        >
          "
        </h2>
        <p className={style(styles.quoteText, props.classNameQuoteText)}>
          {props.text}
        </p>
        <span
          className={style(
            styles.quotationMarkRight,
            props.classNameQuotationMarks
          )}
        >
          "
        </span>
      </div>
    </div>
  );
};
