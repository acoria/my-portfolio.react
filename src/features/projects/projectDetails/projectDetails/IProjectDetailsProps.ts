import { IProject } from "../../../../shared/model/IProject";
import { IHaveClassName } from "../../../../types/IHaveClassName";

export interface IProjectDetailsProps extends IHaveClassName {
  project: IProject;
}
