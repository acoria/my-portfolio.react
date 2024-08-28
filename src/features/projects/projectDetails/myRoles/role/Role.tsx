import { IRoleProps } from "./IRoleProps";
import styles from "./Role.module.scss";

export const Role: React.FC<IRoleProps> = (props) => {
  const tasks = props.role.subRoles?.map((subRole, index) => (
    <div key={index}>{subRole.title}</div>
  ));

  return (
    <div className={styles.role}>
      <h1 className={styles.title}>{props.role.title}</h1>
      <div className={styles.tasks}>{tasks}</div>
    </div>
  );
};
