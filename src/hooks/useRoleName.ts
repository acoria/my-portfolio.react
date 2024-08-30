import { error } from "../core/utils/error";
import { Role } from "../types/Role";
import { texts } from "./useTranslation/texts";
import { useTranslation } from "./useTranslation/useTranslation";

export const useRoleName = (role: Role): string => {
  const { t } = useTranslation();

  const roleName = (): string => {
    switch (role) {
      case Role.DEVELOPMENT:
        return t(texts.roles.development);
      case Role.ORGANIZATION:
        return t(texts.roles.organization);
      case Role.PROJECT:
        return t(texts.roles.project);
      case Role.USABILITY:
        return t(texts.roles.usability);
      default:
        error(`Missing role "${role}". This role is not mapped to a name.`);
    }
    throw Error(`Missing role "${role}". This role is not mapped to a name.`);
  };

  return roleName();
};
