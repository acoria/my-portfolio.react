import { AppConfig } from "../AppConfig";
import { ITestimonial } from "../shared/model/ITestimonial";
import { Repository } from "./Repository";

class TestimonialRepositoryDefault extends Repository<ITestimonial> {}
export const TestimonialRepository = new TestimonialRepositoryDefault(
  `${AppConfig.HOST}/data/testimonials.json`
);
