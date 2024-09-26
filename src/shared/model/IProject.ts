import { ICustomer } from "./ICustomer";
import { IImage } from "./IImage";
import { ITask } from "./ITask";
import { ITechnology } from "./ITechnology";

export interface IProject {
  archived: boolean;
  id: string;
  challenge?: string;
  customer?: ICustomer;
  end?: Date;
  goal?: string;
  images?: IImage[];
  link?: string;
  myTasks: ITask[];
  requirements?: string[];
  start?: Date;
  techStack: ITechnology[];
  title: string;
  usage: string[];
}
