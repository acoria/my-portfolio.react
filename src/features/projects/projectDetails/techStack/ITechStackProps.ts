import { ITechnology } from "../../../../shared/model/ITechnology";
import { IHaveClassName } from "../../../../types/IHaveClassName";

export interface ITechStackProps extends IHaveClassName {
  technologies: ITechnology[];
}
