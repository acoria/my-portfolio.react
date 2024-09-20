import { Fragment, useEffect, useState } from "react";
import { ProjectAPI } from "../../../api/ProjectRepository";
import { request } from "../../../core/utils/request";
import { IProject } from "../../../shared/model/IProject";
import { Project } from "../project/Project";
import styles from "./ProjectList.module.scss";
import { LoadingSpinner } from "../../../components/loadingSpinner/LoadingSpinner";

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects.filter((project) => !project.archived));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.projects}>
      {isLoading && <LoadingSpinner className={styles.loadingSpinner} />}
      {projects.map((project) => (
        <Fragment key={project.id}>
          <Project project={project} key={project.id} />
        </Fragment>
      ))}
    </div>
  );
};
