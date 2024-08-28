import { IMyRolesProps } from "./IMyRolesProps";
import styles from "./MyRoles.module.scss";
import { Role } from "./role/Role";

export const MyRoles: React.FC<IMyRolesProps> = (props) => {
  const roles = props.myRoles.map((role, index) => (
    <Role key={index} role={role} />
  ));
  return <div className={styles.myRoles}>{roles}</div>;
};
