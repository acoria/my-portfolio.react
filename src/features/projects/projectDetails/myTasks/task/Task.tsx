import { DetailedEntityIconList } from "../../../../../components/detailedEntityIconList/DetailedEntityIconList";
import { useTaskName } from "../../../../../hooks/useTaskName";
import { ITaskProps } from "./ITaskProps";
import styles from "./Task.module.scss";
import { TaskIcon } from "./taskIcon/TaskIcon";

export const Task: React.FC<ITaskProps> = (props) => {
  return (
    <DetailedEntityIconList
      entity={props.task}
      entries={props.task.subTasks}
      icon={<TaskIcon task={props.task.taskType} className={styles.icon} />}
      titleProperty="taskType"
      titleHook={useTaskName}
      className={styles.task}
    />
  );
};
