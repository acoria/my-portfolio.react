import { IProject } from "../shared/model/IProject";
import { ITechnology } from "../shared/model/ITechnology";
import { Technology } from "../types/Technology";
import { TechnologyType } from "../types/TechnologyType";

export class ProjectTechStackCondenser {
  private collectedTechStack = new Map<TechnologyType, Technology[]>();
  condense(projects: IProject[]): ITechnology[] {
    projects.forEach((project) => {
      const techStack = project.techStack;
      techStack.forEach((technology) => {
        let technologies = this.collectedTechStack.get(technology.type);
        if (technologies === undefined) {
          technologies = technology.technologies;
        } else {
          technologies = [...technologies, ...technology.technologies];
        }
        this.collectedTechStack.set(technology.type, technologies);
      });
    });
    //TODO: make set out of technology list to avoid duplicate entries
    return this.convertToTechnology();
  }

  private convertToTechnology(): ITechnology[] {
    const technologies: ITechnology[] = [];
    const entries = this.collectedTechStack.entries();
    let hasNext = true;
    let entry: IteratorResult<[TechnologyType, Technology[]], any>;
    while (hasNext) {
      entry = entries.next();
      if (entry.value === undefined) {
        hasNext = false;
      } else {
        const technology: ITechnology = {
          type: entry.value[0],
          technologies: entry.value[1],
        };
        technologies.push(technology);
      }
    }
    return technologies;
  }
}
