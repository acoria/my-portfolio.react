import { ICustomer } from "./ICustomer";
import { ITechnology } from "./ITechnology";

export interface IProject {
  id: string;
  challenge: string;
  customer: ICustomer;
  end: Date;
  goal: string;
  myRoles: string[];
  requirements: string[];
  start: Date;
  tasks: string[];
  techStack: ITechnology[];
  title: string;
  imageUrls: string[];
  archived: boolean;
}
