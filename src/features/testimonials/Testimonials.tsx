import { useEffect, useState } from "react";
import { TestimonialRepository } from "../../api/TestimonialRepository";
import { request } from "../../core/utils/request";
import { ITestimonial } from "../../shared/model/ITestimonial";
import { Testimonial } from "./testimonial/Testimonial";
import styles from "./Testimonials.module.scss";

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);

  useEffect(() => {
    request(async () => {
      const testimonials = await TestimonialRepository.findAll();
      setTestimonials(testimonials);
    });
  }, []);

  return (
    <div className={styles.testimonials}>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  );
};
