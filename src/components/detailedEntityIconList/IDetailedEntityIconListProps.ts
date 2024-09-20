import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IDetailedEntityIconListProps<TEntity, TTitleEnum>
  extends IHaveClassName {
  entity: TEntity;
  entries?: string[];
  highlightedEntries?: string[];
  icon: ReactElement;
  separator?: string;
  titleNameHook: (titleEnum: TTitleEnum) => string;
  titleProperty: keyof TEntity;
}
