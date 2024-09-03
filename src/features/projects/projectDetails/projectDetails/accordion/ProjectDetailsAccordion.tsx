import { ReactElement, useId, useState } from "react";
import { IProjectDetailsAccordionProps } from "./IProjectDetailsAccordionProps";
import styles from "./ProjectDetailsAccordion.module.scss";
import { ProjectDetailsAccordionItem } from "./item/ProjectDetailsAccordionItem";

export const ProjectDetailsAccordion: React.FC<
  IProjectDetailsAccordionProps
> = (props) => {
  const radioGroupName = useId();

  const [checkedItem, setCheckedItem] = useState<number | undefined>(undefined);

  const findContent = (index: number): ReactElement => {
    if (Array.isArray(props.children)) {
      return props.children[index];
    } else {
      return props.children;
    }
  };

  const entries = () => {
    return props.titles.map((title, index) => (
      <ProjectDetailsAccordionItem
        key={`${radioGroupName}_${index}`}
        title={title}
        radioGroupName={radioGroupName}
        onCheck={() => setCheckedItem(index)}
        isChecked={index === checkedItem}
      >
        {findContent(index)}
      </ProjectDetailsAccordionItem>
    ));
  };

  return <div className={styles.projectDetailsAccordion}>{entries()}</div>;
};
