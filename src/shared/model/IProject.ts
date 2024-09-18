import { ICustomer } from "./ICustomer";
import { IImage } from "./IImage";
import { ITask } from "./ITask";
import { ITechnology } from "./ITechnology";

export interface IProject {
  id: string;
  challenge?: string;
  customer?: ICustomer;
  end?: Date;
  goal?: string;
  myTasks: ITask[];
  // myTasks: string[];
  requirements?: string[];
  start?: Date;
  techStack: ITechnology[];
  title: string;
  images?: IImage[];
  archived: boolean;
}
