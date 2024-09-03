import { useEffect, useId, useState } from "react";
import { ReactComponent as ChevronLeft } from "../../../../../../assets/chevron_left.svg";
import { IProjectDetailsAccordionItemProps } from "./IProjectDetailsAccordionItemProps";
import styles from "./ProjectDetailsAccordionItem.module.scss";

export const ProjectDetailsAccordionItem: React.FC<
  IProjectDetailsAccordionItemProps
> = (props) => {
  const [childHeight, setChildHeight] = useState(0);
  const id = useId();

  useEffect(() => {
    const height = document.getElementById(id)?.scrollHeight ?? 0;
    setChildHeight(height);
  }, [id]);

  return (
    <div className={styles.projectDetailsAccordionItem}>
      <input
        className={styles.input}
        id={props.title}
        name={props.radioGroupName}
        type="radio"
        onChange={props.onCheck}
        onClick={()=>{console.log(props.title)}}
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
        style={{ height: props.isChecked ? `${childHeight + 8}px` : "0px" }}
      >
        <div id={id} className={styles.childWrapper}>
          {props.children}
        </div>
      </article>
    </div>
  );
};
