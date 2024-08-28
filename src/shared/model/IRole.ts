export interface IRole {
  title: string;
  subRoles?: IRole[];
}
