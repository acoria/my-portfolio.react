import { useEffect, useId, useRef, useState } from "react";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron_left.svg";
import { style } from "../../../core/utils/style";
import styles from "./AccordionItem.module.scss";
import { IAccordionItemProps } from "./IAccordionItemProps";

export const AccordionItem: React.FC<IAccordionItemProps> = (props) => {
  const [childHeight, setChildHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    setChildHeight(ref.current?.clientHeight ?? 0);
  }, [props.isOpen]);

  return (
    <div>
      <div
        className={style(
          styles.header,
          props.headerClassName,
          props.isOpen ? styles.headerIsOpen : ""
        )}
        onClick={props.onClick}
      >
        <label
          htmlFor={id}
          className={style(styles.title, props.titleClassName)}
        >
          {props.title}
        </label>
        <ChevronLeft
          className={props.isOpen ? styles.chevronUp : styles.chevronDown}
        />
      </div>
      <article
        id={id}
        className={style(
          styles.content,
          props.contentClassName,
          props.isOpen ? styles.contentIsOpen : ""
        )}
        style={{
          height: props.isOpen ? `${childHeight}px` : "0px",
        }}
      >
        <div ref={ref} className={style(styles.childWrapper)}>
          {props.children}
        </div>
      </article>
    </div>
  );
};
