import { AppConfig } from "../AppConfig";
import { LanguageConfig } from "../i18n/LanguageConfig";
import { ITestimonial } from "../shared/model/ITestimonial";
import { Repository } from "./Repository";

export class TestimonialRepository extends Repository<ITestimonial> {
  constructor() {
    super(
      `${AppConfig.HOST}/data/${LanguageConfig.language}/testimonials.json`
    );
  }
}
