import { Tabstrip } from "../../../components/tabstrip/Tabstrip";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const { t } = useTranslation();
  //   const tabNames = (): string[] => {
  //     const tabNameTexts: string[] = [];
  //     for (const tabName in texts.projects.projectDetails.tabs) {
  //       tabNameTexts.push(t(tabName));
  //     }
  //     return tabNameTexts;
  //   };
  const tabNames = (): string[] => [
    t(texts.projects.projectDetails.tabs.challenge),
    t(texts.projects.projectDetails.tabs.requirements),
    t(texts.projects.projectDetails.tabs.customer),
    t(texts.projects.projectDetails.tabs.myRoles),
    t(texts.projects.projectDetails.tabs.techStack),
  ];
  return (
    <div className={styles.projectDetails}>
      <Tabstrip captions={tabNames()} darkMode></Tabstrip>
    </div>
  );
};
