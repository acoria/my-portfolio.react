import { ReactElement } from "react";
import { Quote } from "../../../components/quote/Quote";
import { ITestimonialProps } from "./ITestimonialProps";
import styles from "./Testimonial.module.scss";

export const Testimonial: React.FC<ITestimonialProps> = (props) => {
  const quoteFrom = (): ReactElement => {
    return (
      <div className={styles.quoteFrom}>
        <h4 className={styles.author}>{props.testimonial.author}</h4>
        <h5 className={styles.company}>{props.testimonial.company}</h5>
      </div>
    );
  };
  return (
    <div className={styles.testimonial}>
      <Quote
        text={props.testimonial.quote}
        author={quoteFrom()}
        className={styles.testimonialText}
      />
    </div>
  );
};
