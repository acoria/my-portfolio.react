import { ReactElement } from "react";
import { Quote } from "../../../components/quote/Quote";
import { ITestimonialProps } from "./ITestimonialProps";
import styles from "./Testimonial.module.scss";
import { Link } from "../../../components/link/Link";
import { style } from "../../../core/utils/style";

export const Testimonial: React.FC<ITestimonialProps> = (props) => {
  const quoteFrom = (): ReactElement => {
    return (
      <div className={styles.quoteFrom}>
        <h4 className={styles.author}>{props.testimonial.author}</h4>
        <h5
          className={styles.job}
        >{`${props.testimonial.jobTitle} | ${props.testimonial.company}`}</h5>
      </div>
    );
  };

  const quote = (
    <Quote
      text={props.testimonial.quote}
      author={quoteFrom()}
      className={styles.testimonialText}
    />
  );

  return (
    <>
      {props.testimonial.link && (
        <Link
          to={props.testimonial.link}
          openInNewTab
          className={style(styles.testimonial, styles.link)}
        >
          {quote}
        </Link>
      )}
      {!props.testimonial.link && (
        <div className={styles.testimonial}>{quote}</div>
      )}
    </>
  );
};
