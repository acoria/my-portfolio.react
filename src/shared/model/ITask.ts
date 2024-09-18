import { Task } from "../../types/Task";

export interface ITask {
  taskType: Task;
  subTasks?: string[];
}
