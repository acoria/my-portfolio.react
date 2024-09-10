class ProgrammingExperienceCalculatorDefault {
  calculateYears() {
    const today = new Date();
    return today.getFullYear() - 2012;
  }
}
export const ProgrammingExperienceCalculator =
  new ProgrammingExperienceCalculatorDefault();
