import { Subtask } from "../../types/Subtask";
import { Task } from "../../types/Task";

export interface ITask {
  taskType: Task;
  subTasks?: Subtask[];
}
