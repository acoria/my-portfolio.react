import { error } from "../../../../../../core/utils/error";
import { Role } from "../../../../../../types/Role";
import { ReactComponent as Coding } from "../../../../../../assets/roles/coding.svg";
import { ReactComponent as Orga } from "../../../../../../assets/roles/orga.svg";
import { ReactComponent as Project } from "../../../../../../assets/roles/project.svg";
import { ReactComponent as Usability } from "../../../../../../assets/roles/usability.svg";
import { IRoleIconProps } from "./IRoleIconProps";

export const RoleIcon: React.FC<IRoleIconProps> = (props) => {
  const icon = () => {
    switch (props.role) {
      case Role.DEVELOPMENT:
        return <Coding className={props.className} />;
      case Role.ORGANIZATION:
        return <Orga className={props.className} />;
      case Role.PROJECT:
        return <Project className={props.className} />;
      case Role.USABILITY:
        return <Usability className={props.className} />;
      default:
        error(`Missing icon for role ${props.role}.`);
    }
  };

  return <>{icon()}</>;
};
