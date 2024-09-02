import { useEffect, useState } from "react";
import { ReactComponent as ChevronLeft } from "../../../../../../assets/chevron_left.svg";
import { IProjectDetailsAccordionItemProps } from "./IProjectDetailsAccordionItemProps";
import styles from "./ProjectDetailsAccordionItem.module.scss";

export const ProjectDetailsAccordionItem: React.FC<
  IProjectDetailsAccordionItemProps
> = (props) => {
  const [childHeight, setChildHeight] = useState(0);
  useEffect(() => {
    const height = document.getElementById("child")?.scrollHeight ?? 0;
    setChildHeight(height);
  }, []);

  return (
    <div className={styles.projectDetailsAccordionItem}>
      <input
        className={styles.input}
        id={props.title}
        name={props.radioGroupName}
        type="radio"
        onChange={props.onCheck}
      />
      <div className={styles.item}>
        <label htmlFor={props.title} className={styles.title}>
          {props.title}
        </label>
        <ChevronLeft
          className={props.isChecked ? styles.chevronUp : styles.chevronDown}
        />
      </div>
      <article
        className={styles.content}
        style={{ height: props.isChecked ? `${childHeight + 30}px` : "0px" }}
      >
        <div id="child">{props.children}</div>
      </article>
    </div>
  );
};
