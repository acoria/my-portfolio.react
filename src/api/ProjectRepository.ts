import { AppConfig } from "../AppConfig";
import { LanguageConfig } from "../i18n/LanguageConfig";
import { IProject } from "../shared/model/IProject";
import { Repository } from "./Repository";

export class ProjectAPI extends Repository<IProject> {
  constructor() {
    super(`${AppConfig.HOST}/data/${LanguageConfig.language}/projects.json`);
  }
}
