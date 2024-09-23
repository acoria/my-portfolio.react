import { useEffect, useState } from "react";
import { TestimonialRepository } from "../../api/TestimonialRepository";
import { request } from "../../core/utils/request";
import { ITestimonial } from "../../shared/model/ITestimonial";
import { Testimonial } from "./testimonial/Testimonial";
import styles from "./Testimonials.module.scss";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request(async () => {
      const testimonials = await new TestimonialRepository().findAll();
      setTestimonials(testimonials);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.testimonials}>
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
        testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
    </div>
  );
};
