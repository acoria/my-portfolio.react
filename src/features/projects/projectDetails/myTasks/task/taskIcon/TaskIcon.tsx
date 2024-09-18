import { error } from "../../../../../../core/utils/error";
import { Task } from "../../../../../../types/Task";
import { ReactComponent as Coding } from "../../../../../../assets/tasks/coding.svg";
import { ReactComponent as Orga } from "../../../../../../assets/tasks/orga.svg";
import { ReactComponent as Project } from "../../../../../../assets/tasks/project.svg";
import { ReactComponent as Usability } from "../../../../../../assets/tasks/usability.svg";
import { ITaskIconProps } from "./ITaskIconProps";

export const TaskIcon: React.FC<ITaskIconProps> = (props) => {
  const icon = () => {
    switch (props.task) {
      case Task.DEVELOPMENT:
        return <Coding className={props.className} />;
      case Task.ORGANIZATION:
        return <Orga className={props.className} />;
      case Task.PROJECT:
        return <Project className={props.className} />;
      case Task.USABILITY:
        return <Usability className={props.className} />;
      default:
        error(`Missing icon for task "${props.task}".`);
    }
  };

  return <>{icon()}</>;
};
