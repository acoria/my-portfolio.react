import { useEffect, useState } from "react";
import { ProjectAPI } from "../../api/ProjectRepository";
import { request } from "../../core/utils/request";
import { ProjectTechStackCollector } from "../../services/ProjectTechStackCollector";
import { IProject } from "../../shared/model/IProject";
import { ITechnology } from "../../shared/model/ITechnology";
import { useTechnologyTypeName } from "../../hooks/useTechnologyTypeName";

export const useTechnologiesViewModel = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const technologyTypeName = useTechnologyTypeName();

  useEffect(() => {
    setIsLoading(true);
    request(async () => {
      const projects = await ProjectAPI.findAll();
      setProjects(projects);
      setIsLoading(false);
    });
  }, []);

  const getTechnologiesByProjects = (): ITechnology[] => {
    const technologies = new ProjectTechStackCollector().collect(projects);
    technologies.sort((first, second) => {
      const firstTechnology = technologyTypeName(first.type);
      const secondTechnology = technologyTypeName(second.type);
      return firstTechnology.localeCompare(secondTechnology);
    });
    return technologies;
  };

  const technologies: ITechnology[] =
    projects.length === 0 ? [] : getTechnologiesByProjects();

  return { technologies, isLoading };
};
