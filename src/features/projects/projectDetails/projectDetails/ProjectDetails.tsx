import { useState } from "react";
import { Tabstrip } from "../../../../components/tabstrip/Tabstrip";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";
import { Challenge } from "../challenge/Challenge";
import { style } from "../../../../core/utils/style";
import { Customer } from "../customer/Customer";

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
      case 2:
        return <Customer customer={props.project.customer} />;
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
