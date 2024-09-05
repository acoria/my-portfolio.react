import { useEffect, useState } from "react";
import { ProjectAPI } from "../../api/ProjectRepository";
import { request } from "../../core/utils/request";
import { ProjectTechStackCollector } from "../../services/ProjectTechStackCollector";
import { IProject } from "../../shared/model/IProject";
import { TechStack } from "../projects/projectDetails/techStack/TechStack";
import styles from "./Technologies.module.scss";

export const Technologies: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects);
    });
  }, []);

  const technologies = () => {
    if (projects.length === 0) return;
    // const project = projects.find((project) => project.id === "0");
    const technologies = new ProjectTechStackCollector().collect(projects);
    return (
      <TechStack
        technologies={technologies}
        // technologies={project?.techStack!}
        className={styles.techStack}
      />
    );
  };

  return <div className={styles.technologies}>{technologies()}</div>;
};
