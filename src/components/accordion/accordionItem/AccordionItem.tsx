import { IAccordionItemProps } from "./IAccordionItemProps";
import styles from "./AccordionItem.module.scss";
import { ReactComponent as ChevronLeft } from "../../../assets/chevron_left.svg";
import { useState, useId, useEffect, useRef } from "react";
import { style } from "../../../core/utils/style";

export const AccordionItem: React.FC<IAccordionItemProps> = (props) => {
  const [childHeight, setChildHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = ref.current?.clientHeight ?? 0;
    console.log(height);
    setChildHeight(height);
  }, [props.isOpen]);

  return (
    <div className={styles.accordionItem}>
      <div
        className={style(
          styles.header,
          props.isOpen ? styles.headerIsOpen : ""
        )}
        onClick={props.onClick}
      >
        <label htmlFor={props.title} className={styles.title}>
          {props.title}
        </label>
        <ChevronLeft
          className={props.isOpen ? styles.chevronUp : styles.chevronDown}
        />
      </div>
      <article
        className={style(
          styles.content,
          props.isOpen ? styles.contentIsOpen : ""
        )}
        style={{ height: props.isOpen ? `${childHeight + 16}px` : "0px" }}
      >
        <div ref={ref} className={styles.childWrapper}>
          {props.children}
        </div>
      </article>
    </div>
  );
};
