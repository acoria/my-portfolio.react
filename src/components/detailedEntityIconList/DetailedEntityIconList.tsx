import { Fragment, ReactElement } from "react";
import { style } from "../../core/utils/style";
import styles from "./DetailedEntityIconList.module.scss";
import { IDetailedEntityIconListProps } from "./IDetailedEntityIconListProps";

export function DetailedEntityIconList<TEntity, TTitleEnum>(
  props: IDetailedEntityIconListProps<TEntity, TTitleEnum>
): ReactElement {
  const title: string = props.titleHook(
    props.entity[props.titleProperty] as TTitleEnum
  );

  const getClassName = (entry: string): string => {
    const index = props.highlightedEntries?.findIndex((item) => item === entry);
    if (index !== -1 && index !== undefined) {
      return styles.highlightedEntry;
    } else return "";
  };

  const entries = props.entries?.map((entry, index) => {
    const length = props.entries?.length;
    if (length === undefined) return <></>;
    return (
      <Fragment key={index}>
        <span className={getClassName(entry)}>{entry}</span>
        {props.separator && index < length - 1 && <> {props.separator} </>}
      </Fragment>
    );
  });
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
