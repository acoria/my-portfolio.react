import { ReactComponent as CleanCode } from "../../../../../assets/tasks/clean_code.svg";
import { ReactComponent as DevOps } from "../../../../../assets/tasks/dev_ops.svg";
import { ReactComponent as Coding } from "../../../../../assets/tasks/coding.svg";
import { ReactComponent as Database } from "../../../../../assets/tasks/database.svg";
import { ReactComponent as Framework } from "../../../../../assets/tasks/framework.svg";
import { ReactComponent as Others } from "../../../../../assets/tasks/others.svg";
import { ReactComponent as Project } from "../../../../../assets/tasks/project.svg";
import { ReactComponent as Protocol } from "../../../../../assets/tasks/protocol.svg";
import { ReactComponent as Spanner2 } from "../../../../../assets/tasks/spanner.svg";
import { ReactComponent as Testing } from "../../../../../assets/tasks/testing.svg";
import { ReactComponent as Usability } from "../../../../../assets/tasks/usability.svg";
import { error } from "../../../../../core/utils/error";
import { TechnologyType } from "../../../../../types/TechnologyType";
import { ITechnologyTypeIconProps } from "./ITechnologyTypeIconProps";

export const TechnologyTypeIcon: React.FC<ITechnologyTypeIconProps> = (
  props
) => {
  const icon = () => {
    switch (props.technologyType) {
      case TechnologyType.DEV_OPS:
        return <DevOps className={props.className} />;
      case TechnologyType.CLEAN_CODE_DEV:
        return <CleanCode className={props.className} />;
      case TechnologyType.COMMUNICATION_FRAMEWORKS:
        return <Protocol className={props.className} />;
      case TechnologyType.DATABASES:
        return <Database className={props.className} />;
      case TechnologyType.FRAMEWORKS_CONCEPTS:
        return <Framework className={props.className} />;
      case TechnologyType.OTHERS:
        return <Others className={props.className} />;
      case TechnologyType.PROGRAMMING_LANGUAGES:
        return <Coding className={props.className} />;
      case TechnologyType.PROJECT_MANAGEMENT:
        return <Project className={props.className} />;
      case TechnologyType.TESTING:
        return <Testing className={props.className} />;
      case TechnologyType.TOOLS:
        return <Spanner2 className={props.className} />;
      case TechnologyType.UI_UX_DESIGN:
        return <Usability className={props.className} />;
      default:
        error(`Missing icon for technology type "${props.technologyType}".`);
    }
  };

  return <>{icon()}</>;
};
