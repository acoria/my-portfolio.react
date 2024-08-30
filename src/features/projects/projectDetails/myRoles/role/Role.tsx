import { useRoleName } from "../../../../../hooks/useRoleName";
import { IRoleProps } from "./IRoleProps";
import styles from "./Role.module.scss";
import { RoleIcon } from "./roleIcon/RoleIcon";

export const Role: React.FC<IRoleProps> = (props) => {
  const roleName = useRoleName(props.role.roleType);

  const tasks = props.role.subRoles?.map((subRole, index) => (
    <div key={index}>{subRole}</div>
  ));

  return (
    <div className={styles.role}>
      <div className={styles.header}>
        <RoleIcon role={props.role.roleType} className={styles.icon} />
        <h1 className={styles.title}>{roleName}</h1>
      </div>
      <div className={styles.tasks}>{tasks}</div>
    </div>
  );
};
