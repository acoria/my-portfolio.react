import { Quote } from "../../../components/quote/Quote";
import { ITestimonialProps } from "./ITestimonialProps";
import styles from "./Testimonial.module.scss";

export const Testimonial: React.FC<ITestimonialProps> = (props) => {
  return (
    <div className={styles.testimonial}>
      <Quote
        text={props.testimonial}
        className={styles.testimonialText}
      />
    </div>
  );
};
