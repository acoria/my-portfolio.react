import { IMyTasksProps } from "./IMyTasksProps";
import styles from "./MyTasks.module.scss";
import { Task } from "./task/Task";

export const MyTasks: React.FC<IMyTasksProps> = (props) => {
  const tasks = props.myTasks.map((task, index) => (
    <Task key={index} task={task} />
  ));
  return <div className={styles.myTasks}>{tasks}</div>;
};
