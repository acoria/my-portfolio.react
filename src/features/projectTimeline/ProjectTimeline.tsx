import { style } from "../../core/utils/style";
import { IProjectTimelineProps } from "./IProjectTimelineProps";
import styles from "./ProjectTimeline.module.scss";

interface IProject {
  title: string;
}

export const ProjectTimeline: React.FC<IProjectTimelineProps> = (props) => {
  const projects: IProject[] = [
    { title: "Project 1" },
    { title: "Project 2" },
    { title: "Project 3" },
    { title: "Project 4" },
  ];

  const buildProject = (project: IProject, index: number) => {
    const positionClass = index % 2 === 0 ? styles.left : styles.right;
    return (
      <div className={style(styles.project, positionClass)} key={project.title}>
        {project.title}
      </div>
    );
  };

  return (
    <div className={styles.projectTimeline}>
      <div className={styles.grid}>
        {projects.map((project, index) => buildProject(project, index))}
      </div>
    </div>
  );
};
