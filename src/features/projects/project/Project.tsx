import { DateTime } from "../../../core/services/date/DateTime";
import { ProjectDetails } from "../projectDetails/projectDetails/ProjectDetails";
import { IProjectProps } from "./IProjectProps";
import styles from "./Project.module.scss";

export const Project: React.FC<IProjectProps> = (props) => {
  const startDate = DateTime.format(props.project.start, "MM.yyyy");
  const endDate = DateTime.format(props.project.end, "MM.yyyy");
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h1>{props.project.title}</h1>
        <span>{`${startDate} - ${endDate}`}</span>
      </div>
      <ProjectDetails project={props.project} />
    </div>
  );
};
