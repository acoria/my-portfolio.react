import { useEffect, useState } from "react";
import { ProjectAPI } from "../../api/ProjectRepository";
import { request } from "../../core/utils/request";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ProjectTechStackCondenser } from "../../services/ProjectTechStackCondenser";
import { IProject } from "../../shared/model/IProject";
import { TechStack } from "../projects/projectDetails/techStack/TechStack";
import { ITechnologiesProps } from "./ITechnologiesProps";
import styles from "./Technologies.module.scss";

export const Technologies: React.FC<ITechnologiesProps> = (props) => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects);
    });
  }, []);

  // const mapTechnologyToText = (tech: Technology): string => {
  //   const techIndex = Object.keys(Technology).findIndex(
  //     (technology) => technology === tech
  //   );
  //   return Object.values(Technology)[techIndex];
  // };

  const technologies = () => {
    if (projects.length === 0) return;
    const technologies = new ProjectTechStackCondenser().condense(projects);
    return <TechStack technologies={technologies} />;
  };

  return <div className={styles.technologies}>{technologies()}</div>;
};
