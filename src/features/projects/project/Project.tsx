import { ReactComponent as Calendar } from "../../../assets/calendar.svg";
import { Technologies } from "../../technologies/Technologies";
import { IProjectProps } from "./IProjectProps";
import styles from "./Project.module.scss";

export const Project: React.FC<IProjectProps> = (props) => {
  return (
    <div className={styles.projectCard} key={props.project.id}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.roles}>{props.project.myRoles.join(" | ")}</h1>
          <h2
            className={styles.customer}
          >{`${props.project.customer.name} (${props.project.customer.branch}, ${props.project.customer.employeeSize}) `}</h2>
        </div>
        <div className={styles.duration}>
          <Calendar className={styles.calendar} />
          <div>2022 - 2024</div>
          <div>2 years</div>
          <div>6 months</div>
        </div>
      </div>
      <h2 className={styles.goal}>{props.project.goal}</h2>
      <div className={styles.tasksAndRequirements}>
        <div>
          <h3 className={styles.subtitle}>Tasks</h3>
          <ul className={styles.list}>
            {props.project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subtitle}>Requirements</h3>
          <ul className={styles.list}>
            {props.project.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={styles.subtitle}>Technologies</h3>
      <div className={styles.techStack}>
        <Technologies technologies={props.project.techStack} />
      </div>
    </div>
  );
};
