import { IProject } from "../shared/model/IProject";
import { ITechnology } from "../shared/model/ITechnology";
import { Technology } from "../types/Technology";
import { TechnologyType } from "../types/TechnologyType";

export class ProjectTechStackCollector {
  collect(projects: IProject[]): ITechnology[] {
    const collectedTechStack = new Map<TechnologyType, Set<Technology>>();
    projects.forEach((project) => {
      const techStack = project.techStack;
      techStack.forEach((technology) => {
        let technologies = collectedTechStack.get(technology.type);
        if (technologies !== undefined) {
          technology.technologies.forEach((technology) =>
            technologies!.add(technology)
          );
        } else {
          technologies = new Set<Technology>(technology.technologies);
        }
        collectedTechStack.set(technology.type, technologies);
      });
    });
    return this.convertMapToTechnology(collectedTechStack);
  }

  private convertMapToTechnology(
    collectedTechStack: Map<TechnologyType, Set<Technology>>
  ): ITechnology[] {
    const technologies: ITechnology[] = [];
    const entries = collectedTechStack.entries();
    let hasNext = true;
    let entry: IteratorResult<[TechnologyType, Set<Technology>], any>;
    while (hasNext) {
      entry = entries.next();
      if (entry.value === undefined) {
        hasNext = false;
      } else {
        const technology: ITechnology = {
          type: entry.value[0],
          technologies: this.convertSetToTechnology(entry.value[1]),
        };
        technologies.push(technology);
      }
    }
    this.sortAlphabetically(technologies);
    return technologies;
  }

  private convertSetToTechnology(technologySet: Set<Technology>): Technology[] {
    const technologies: Technology[] = [];
    technologySet.forEach((technology) => technologies.push(technology));
    return technologies;
  }

  private sortAlphabetically(technologies: ITechnology[]) {
    technologies.forEach((technology) => {
      technology.technologies.sort((first, second) =>
        first.localeCompare(second)
      );
    });
  }
}
