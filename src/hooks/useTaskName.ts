import { error } from "../core/utils/error";
import { Task } from "../types/Task";
import { texts } from "./useTranslation/texts";
import { useTranslation } from "./useTranslation/useTranslation";

export const useTaskName = (task: Task): string => {
  const { t } = useTranslation();

  const taskName = (): string => {
    switch (task) {
      case Task.DEVELOPMENT:
        return t(texts.tasks.development);
      case Task.ORGANIZATION:
        return t(texts.tasks.organization);
      case Task.PROJECT:
        return t(texts.tasks.project);
      case Task.USABILITY:
        return t(texts.tasks.usability);
      default:
        error(`Missing task "${task}". This task is not mapped to a name.`);
    }
    throw Error(`Missing task "${task}". This task is not mapped to a name.`);
  };

  return taskName();
};
