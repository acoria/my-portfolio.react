import { IDetailedEntityIconListProps } from "./IDetailedEntityIconListProps";
import styles from "./DetailedEntityIconList.module.scss";
import { ReactElement } from "react";
import { style } from "../../core/utils/style";

export function DetailedEntityIconList<TEntity, TTitleEnum>(
  props: IDetailedEntityIconListProps<TEntity, TTitleEnum>
): ReactElement {
  const title: string = props.titleHook(
    props.entity[props.titleProperty] as TTitleEnum
  );

  const entries = props.entries?.map((entry, index) => (
    <div key={index}>{entry}</div>
  ));
  return (
    <div className={style(styles.detailedEntityIconList, props.className)}>
      <div className={styles.header}>
        {props.icon}
        <h1 className={styles.title}>{title}</h1>
      </div>
      {entries}
    </div>
  );
}
