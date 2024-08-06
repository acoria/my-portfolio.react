import { ICustomer } from "./ICustomer";
import { ITechnology } from "./ITechnology";

export interface IProject {
  id: string;
  myRoles: string[];
  customer: ICustomer;
  goal: string;
  requirements: string[];
  tasks: string[];
  techStack: ITechnology[];
  start: Date;
  end: Date;
}
