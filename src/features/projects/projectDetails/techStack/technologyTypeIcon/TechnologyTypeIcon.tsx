import { ReactComponent as CleanCode } from "../../../../../assets/roles/clean_code.svg";
import { ReactComponent as CiCd } from "../../../../../assets/roles/ci_cd.svg";
import { ReactComponent as Coding } from "../../../../../assets/roles/coding.svg";
import { ReactComponent as Database } from "../../../../../assets/roles/database.svg";
import { ReactComponent as Framework } from "../../../../../assets/roles/framework.svg";
import { ReactComponent as Others } from "../../../../../assets/roles/others.svg";
import { ReactComponent as Project } from "../../../../../assets/roles/project.svg";
import { ReactComponent as Protocol } from "../../../../../assets/roles/protocol.svg";
import { ReactComponent as Spanner2 } from "../../../../../assets/roles/spanner.svg";
import { ReactComponent as Testing } from "../../../../../assets/roles/testing.svg";
import { error } from "../../../../../core/utils/error";
import { TechnologyType } from "../../../../../types/TechnologyType";
import { ITechnologyTypeIconProps } from "./ITechnologyTypeIconProps";

export const TechnologyTypeIcon: React.FC<ITechnologyTypeIconProps> = (
  props
) => {
  const icon = () => {
    switch (props.technologyType) {
      case TechnologyType.CI_CD:
        return <CiCd className={props.className} />;
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
      default:
        error(`Missing icon for technology type "${props.technologyType}".`);
    }
  };

  return <>{icon()}</>;
};
