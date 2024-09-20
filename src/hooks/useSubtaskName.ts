import { error } from "../core/utils/error";
import { Subtask } from "../types/Subtask";
import { texts } from "./useTranslation/texts";
import { useTranslation } from "./useTranslation/useTranslation";

export const useSubtaskName = (): ((subtask: Subtask) => string) => {
  const { t } = useTranslation();

  const subtaskName = (subtask: Subtask): string => {
    switch (subtask) {
      case Subtask.COMMUNICATION_AND_COORDINATION:
        return t(texts.subtasks.communicationAndCoordination);
      case Subtask.FULLSTACK_DEVELOPMENT:
        return t(texts.subtasks.fullStackDevelopment);
      case Subtask.PLANNING_AND_ESTIMATION:
        return t(texts.subtasks.planningAndEstimation);
      case Subtask.PRODUCT_BACKLOG:
        return t(texts.subtasks.productBacklog);
      case Subtask.REQUIREMENTS_ENGINEER:
        return t(texts.subtasks.requirementsEngineer);
      case Subtask.REVIEW_MEETING_MODERATION:
        return t(texts.subtasks.reviewMeetingModeration);
      case Subtask.SOFTWARE_ARCHITECTURE:
        return t(texts.subtasks.softwareArchitecture);
      case Subtask.UI_DESIGN:
        return t(texts.subtasks.uiDesign);
      case Subtask.USABILITY_TESTS:
        return t(texts.subtasks.usabilityTests);
      case Subtask.UX_DESIGN:
        return t(texts.subtasks.uxDesign);
      default:
        error(
          `Missing subtask "${subtask}". This subtask is not mapped to a name.`
        );
    }
    throw Error(
      `Missing subtask "${subtask}". This subtask is not mapped to a name.`
    );
  };

  return subtaskName;
};
