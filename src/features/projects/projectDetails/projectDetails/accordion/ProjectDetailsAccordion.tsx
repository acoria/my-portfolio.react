import { useId } from "react";
import { IRole } from "../../../../../shared/model/IRole";
import { MyRoles } from "../../myRoles/MyRoles";
import { IProjectDetailsAccordionProps } from "./IProjectDetailsAccordionProps";
import styles from "./ProjectDetailsAccordion.module.scss";

export const ProjectDetailsAccordion: React.FC<
  IProjectDetailsAccordionProps
> = (props) => {
  const radioGroupName = useId();
  const getArticleClassName = (index: number): string => {
    if (index === 0) {
      return styles.entryFirst;
    } else if (index === 2) {
      return styles.entryMiddle;
    } else {
      return styles.entryLast;
    }
  };
  const entries = () => {
    return props.titles.map((title, index) => (
      <div>
        <input
          id={title}
          name={radioGroupName}
          type="radio"
          checked={undefined}
          onChange={()=>{
            
          }}
        />
        <label htmlFor={title}>{title}</label>
        <article className={getArticleClassName(index)}>
          <MyRoles myRoles={props.project.myRoles as any as IRole[]} />
        </article>
      </div>
    ));
  };

  return <div className={styles.projectDetailsAccordion}>{entries()}</div>;
};
