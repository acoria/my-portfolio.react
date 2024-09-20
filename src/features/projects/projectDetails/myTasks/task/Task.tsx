import { useMemo } from "react";
import { DetailedEntityIconList } from "../../../../../components/detailedEntityIconList/DetailedEntityIconList";
import { useTaskName } from "../../../../../hooks/useTaskName";
import { ITaskProps } from "./ITaskProps";
import styles from "./Task.module.scss";
import { TaskIcon } from "./taskIcon/TaskIcon";
import { useSubtaskName } from "../../../../../hooks/useSubtaskName";

export const Task: React.FC<ITaskProps> = (props) => {
  const convertSubtaskName = useSubtaskName();

  const subtasks = useMemo(() => {
    return props.task.subTasks?.map((subtask) => convertSubtaskName(subtask));
  }, [convertSubtaskName, props.task.subTasks]);

  return (
    <DetailedEntityIconList
      entity={props.task}
      entries={subtasks}
      icon={<TaskIcon task={props.task.taskType} className={styles.icon} />}
      titleProperty="taskType"
      titleNameHook={useTaskName}
      className={styles.task}
    />
  );
};
