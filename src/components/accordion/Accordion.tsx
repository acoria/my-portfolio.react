import { IAccordionProps } from "./IAccordionProps";
import { ReactElement, useState } from "react";
import { AccordionItem } from "./accordionItem/AccordionItem";

export const Accordion: React.FC<IAccordionProps> = (props) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | undefined>(
    undefined
  );

  const findContent = (index: number): ReactElement => {
    if (Array.isArray(props.children)) {
      return props.children[index];
    } else {
      return props.children;
    }
  };

  const entries = () => {
    return props.titles.map((title, index) => (
      <AccordionItem
        key={index}
        title={title}
        isOpen={index === openItemIndex}
        onClick={() => {
          setOpenItemIndex((previous) =>
            previous === index ? undefined : index
          );
        }}
        headerClassName={props.headerClassName}
        titleClassName={props.titleClassName}
        contentClassName={props.contentClassName}
      >
        {findContent(index)}
      </AccordionItem>
    ));
  };

  return <>{entries()}</>;
};
