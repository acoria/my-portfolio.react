import { error } from "../core/utils/error";
import { TechnologyType } from "../types/TechnologyType";
import { texts } from "./useTranslation/texts";
import { useTranslation } from "./useTranslation/useTranslation";

export const useTechnologyTypeName = (): ((
  technologyType: TechnologyType
) => string) => {
  const { t } = useTranslation();

  const convertTechnologyTypeName = (
    technologyType: TechnologyType
  ): string => {
    switch (technologyType) {
      case TechnologyType.DEV_OPS:
        return t(texts.technologies.types.devOps);
      case TechnologyType.CLEAN_CODE_DEV:
        return t(texts.technologies.types.clean_code);
      case TechnologyType.COMMUNICATION_FRAMEWORKS:
        return t(texts.technologies.types.communication_frameworks);
      case TechnologyType.DATABASES:
        return t(texts.technologies.types.databases);
      case TechnologyType.FRAMEWORKS_CONCEPTS:
        return t(texts.technologies.types.frameworks_concepts);
      case TechnologyType.OTHERS:
        return t(texts.technologies.types.others);
      case TechnologyType.PROGRAMMING_LANGUAGES:
        return t(texts.technologies.types.programming_languages);
      case TechnologyType.PROJECT_MANAGEMENT:
        return t(texts.technologies.types.project_management);
      case TechnologyType.TESTING:
        return t(texts.technologies.types.testing);
      case TechnologyType.TOOLS:
        return t(texts.technologies.types.tools);
      case TechnologyType.UI_UX_DESIGN:
        return t(texts.technologies.types.uiUxDesign);
      default:
        error(
          `Missing technology type "${technologyType}". This type is not mapped to a name.`
        );
    }
    throw Error(
      `Missing technology type "${technologyType}". This type is not mapped to a name.`
    );
  };

  return convertTechnologyTypeName;
};
