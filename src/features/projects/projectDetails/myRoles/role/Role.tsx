import { DetailedEntityIconList } from "../../../../../components/detailedEntityIconList/DetailedEntityIconList";
import { useRoleName } from "../../../../../hooks/useRoleName";
import { IRoleProps } from "./IRoleProps";
import styles from "./Role.module.scss";
import { RoleIcon } from "./roleIcon/RoleIcon";

export const Role: React.FC<IRoleProps> = (props) => {
  return (
    <DetailedEntityIconList
      entity={props.role}
      entries={props.role.subRoles}
      icon={<RoleIcon role={props.role.roleType} className={styles.icon} />}
      titleProperty="roleType"
      titleHook={useRoleName}
      className={styles.role}
    />
  );
};
