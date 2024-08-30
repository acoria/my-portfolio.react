import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IDetailedEntityIconListProps<TEntity, TTitleEnum>
  extends IHaveClassName {
  entity: TEntity;
  titleProperty: keyof TEntity;
  titleHook: (titleEnum: TTitleEnum) => string;
  icon: ReactElement;
  entries?: string[];
}
