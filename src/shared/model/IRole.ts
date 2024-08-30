import { Role } from "../../types/Role";

export interface IRole {
  roleType: Role;
  subRoles?: string[];
}
