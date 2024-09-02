import { useId, useState } from "react";
import { IRole } from "../../../../../shared/model/IRole";
import { MyRoles } from "../../myRoles/MyRoles";
import { IProjectDetailsAccordionProps } from "./IProjectDetailsAccordionProps";
import styles from "./ProjectDetailsAccordion.module.scss";
import { ProjectDetailsAccordionItem } from "./item/ProjectDetailsAccordionItem";
import { Requirements } from "../../requirements/Requirements";

export const ProjectDetailsAccordion: React.FC<
  IProjectDetailsAccordionProps
> = (props) => {
  const radioGroupName = useId();

  const [checkedItem, setCheckedItem] = useState<number | undefined>(undefined);

  const entries = () => {
    return props.titles.map((title, index) => (
      <ProjectDetailsAccordionItem
        title={title}
        radioGroupName={radioGroupName}
        onCheck={() => setCheckedItem(index)}
        isChecked={index === checkedItem}
      >
        {/* <MyRoles myRoles={props.project.myRoles as any as IRole[]} /> */}
        <Requirements requirements={props.project.requirements} />
      </ProjectDetailsAccordionItem>
    ));
  };

  return <div className={styles.projectDetailsAccordion}>{entries()}</div>;
};
