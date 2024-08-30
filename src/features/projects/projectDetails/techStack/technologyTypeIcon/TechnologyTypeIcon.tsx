import { ReactComponent as Coding } from "../../../../../assets/roles/coding.svg";
import { ReactComponent as Project } from "../../../../../assets/roles/project.svg";
import { error } from "../../../../../core/utils/error";
import { TechnologyType } from "../../../../../types/TechnologyType";
import { ITechnologyTypeIconProps } from "./ITechnologyTypeIconProps";

export const TechnologyTypeIcon: React.FC<ITechnologyTypeIconProps> = (
  props
) => {
  const icon = () => {
    switch (props.technologyType) {
      case TechnologyType.COMMUNICATION_FRAMEWORKS:
        return <Coding className={props.className} />;
      case TechnologyType.PROGRAMMING_LANGUAGES:
        return <Coding className={props.className} />;
      case TechnologyType.DATABASES:
        return <Coding className={props.className} />;
      case TechnologyType.FRAMEWORKS_CONCEPTS:
        return <Coding className={props.className} />;
      case TechnologyType.TESTING:
        return <Coding className={props.className} />;
      case TechnologyType.TOOLS:
        return <Coding className={props.className} />;
      case TechnologyType.PROJECT_MANAGEMENT:
        return <Project className={props.className} />;
      default:
        error(`Missing icon for technology type "${props.technologyType}".`);
    }
  };

  return <>{icon()}</>;
};
