import { Technology } from "../types/Technology";

export class KeyTechnologyInfo {
  private technologyEntries = Object.entries(Technology);
  private keySkills = new Set<Technology>([
    Technology.CSS,
    Technology.EXPRESS,
    Technology.HTML,
    Technology.JAVASCRIPT,
    Technology.JEST,
    Technology.LEAN_UX,
    Technology.NODEJS,
    Technology.REACT,
    Technology.REST,
    Technology.REQ_ENGINEERING,
    Technology.SOFTWARE_ARCHITECTURE,
    Technology.SCRUM,
    Technology.SCSS,
    Technology.TYPESCRIPT,
    Technology.UNIT_TESTING,
    Technology.UI_UX_DESIGN,
    Technology.VS_CODE,
  ]);

  private isKeyTechnology(technology: Technology): boolean {
    const entry = this.technologyEntries.find(
      (entry) => entry[0] === technology
    );
    if (entry) {
      return this.keySkills.has(entry[1]);
    } else {
      return false;
    }
  }

  /**
   * Finds all key technologies from a given list @param technologies and returns them
   */
  findKeyTechnologies(technologies: Technology[]): Technology[] {
    const keyTechnologies: Technology[] = [];
    technologies.forEach((technology) => {
      if (this.isKeyTechnology(technology)) {
        keyTechnologies.push(technology);
      }
    });
    return keyTechnologies;
  }
}
