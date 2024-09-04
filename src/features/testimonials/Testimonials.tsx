import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ITestimonialsProps } from "./ITestimonialsProps";
import styles from "./Testimonials.module.scss";

export const Testimonials: React.FC<ITestimonialsProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.testimonials}>
      <p>{`"${t(texts.testimonials.texts.sapSaschaStephan)}"`}</p>
      <span>Sascha Stephan (SAP)</span>
    </div>
  );
};
