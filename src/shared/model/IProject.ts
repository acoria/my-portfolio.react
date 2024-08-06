import { Technology } from "../../types/Technology";
import { ICustomer } from "./ICustomer";

export interface IProject {
  id: string;
  myRoles: string[];
  customer: ICustomer;
  goal: string;
  requirements: string[];
  tasks: string[];
  techStack: Technology[];
  start: Date;
  end: Date;
}
