import { AppConfig } from "../AppConfig";
import { IProject } from "../shared/model/IProject";
import { Repository } from "./Repository";

class ProjectAPIDefault extends Repository<IProject> {}
export const ProjectAPI = new ProjectAPIDefault(
  `${AppConfig.HOST}/data/projects.json`
);
