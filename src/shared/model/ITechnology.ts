import { Technology } from "../../types/Technology";
import { TechnologyType } from "../../types/TechnologyType";

export interface ITechnology {
  type: TechnologyType;
  technologies: Technology[];
}
