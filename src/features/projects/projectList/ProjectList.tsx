import { Fragment, useEffect, useState } from "react";
import { ProjectAPI } from "../../../api/ProjectRepository";
import { request } from "../../../core/utils/request";
import { IProject } from "../../../shared/model/IProject";
import { Project } from "../project/Project";
import styles from "./ProjectList.module.scss";

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects.filter((project) => !project.archived));
    });
  }, []);

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <Project project={project} key={project.id} />
        </Fragment>
      ))}
    </div>
  );
};
