import { AppConfig } from "../AppConfig";
import { LanguageConfig } from "../i18n/LanguageConfig";
import { IProduct } from "../products/model/IProduct";
import { Repository } from "./Repository";

export class ProductAPI extends Repository<IProduct> {
  constructor() {
    super(`${AppConfig.HOST}/data/${LanguageConfig.language}/products.json`);
  }
}
