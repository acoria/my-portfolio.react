import { useState } from "react";
import { Tabstrip } from "../../../../components/tabstrip/Tabstrip";
import { style } from "../../../../core/utils/style";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { IRole } from "../../../../shared/model/IRole";
import { Challenge } from "../challenge/Challenge";
import { Customer } from "../customer/Customer";
import { MyRoles } from "../myRoles/MyRoles";
import { Requirements } from "../requirements/Requirements";
import { TechStack } from "../techStack/TechStack";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const { t } = useTranslation();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabNames = (): string[] => [
    t(texts.projects.projectDetails.tabs.challenge),
    t(texts.projects.projectDetails.tabs.requirements),
    t(texts.projects.projectDetails.tabs.customer),
    t(texts.projects.projectDetails.tabs.myRoles),
    t(texts.projects.projectDetails.tabs.techStack),
  ];

  const content = () => {
    switch (selectedTabIndex) {
      case 0:
        return <Challenge text={props.project.challenge} />;
      case 1:
        return <Requirements requirements={props.project.requirements} />;
      case 2:
        return <Customer customer={props.project.customer} />;
      case 3:
        return <MyRoles myRoles={props.project.myRoles as any as IRole[]} />;
      case 4:
        return <TechStack technologies={props.project.techStack} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={style(styles.projectDetails, props.className)}>
      <Tabstrip
        captions={tabNames()}
        className={styles.tabstrip}
        darkMode
        onTabSelect={setSelectedTabIndex}
        selectedTabIndex={0}
      />
      <div className={styles.tabstripContent}>{content()}</div>
    </div>
  );
};
