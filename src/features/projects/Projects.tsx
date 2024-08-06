import { useEffect, useState } from "react";
import { ProjectAPI } from "../../api/ProjectRepository";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { request } from "../../core/utils/request";
import { IProject } from "../../shared/model/IProject";
import { Technology } from "../../types/Technology";
import { Background } from "../background/Background";
import styles from "./Projects.module.scss";

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects);
    });
  }, []);

  const mapTechnologyToText = (tech: Technology): string => {
    const techIndex = Object.keys(Technology).findIndex(
      (technology) => technology === tech
    );
    return Object.values(Technology)[techIndex];
  };

  const buildProject = (project: IProject) => (
    <div className={styles.projectCard} key={project.id}>
      <div className={styles.header}>
        <h1 className={styles.roles}>{project.myRoles.join(" | ")}</h1>
        <div className={styles.duration}>
          <Calendar className={styles.calendar} />
          <div>2022 - 2024</div>
          <div>2 years</div>
          <div>6 months</div>
        </div>
      </div>
      <h2 className={styles.goal}>{project.goal}</h2>
      <div className={styles.tasksAndRequirements}>
        <div>
          <h3 className={styles.subtitle}>Tasks</h3>
          <ul className={styles.list}>
            {project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subtitle}>Requirements</h3>
          <ul className={styles.list}>
            {project.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={styles.subtitle}>Technologies</h3>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <div className={styles.tech} key={tech}>
            {mapTechnologyToText(tech)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.projects}>
      <Background />
      {projects.map((project) => buildProject(project))}
    </div>
  );
};
