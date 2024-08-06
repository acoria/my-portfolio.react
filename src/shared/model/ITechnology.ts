import { Technology } from "../../types/Technology";
import { TechnologyType } from "../../types/TechnologyTpe";

export interface ITechnology {
  type: TechnologyType;
  technologies: Technology[];
}
