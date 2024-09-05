import { ICustomer } from "./ICustomer";
import { IImage } from "./IImage";
import { ITechnology } from "./ITechnology";

export interface IProject {
  id: string;
  challenge?: string;
  customer?: ICustomer;
  end?: Date;
  goal?: string;
  myRoles: string[];
  requirements?: string[];
  start?: Date;
  tasks?: string[];
  techStack: ITechnology[];
  title: string;
  images?: IImage[];
  archived: boolean;
}
