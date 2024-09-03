import { ReactElement, useMemo, useState } from "react";
import { Accordion } from "../../../../components/accordion/Accordion";
import { Tabstrip } from "../../../../components/tabstrip/Tabstrip";
import { style } from "../../../../core/utils/style";
import { useScreenSize } from "../../../../hooks/useScreenSize";
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
  const { isLargeScreen } = useScreenSize();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabNames: string[] = useMemo(
    () => [
      t(texts.projects.projectDetails.tabs.challenge),
      t(texts.projects.projectDetails.tabs.requirements),
      t(texts.projects.projectDetails.tabs.customer),
      t(texts.projects.projectDetails.tabs.myRoles),
      t(texts.projects.projectDetails.tabs.techStack),
    ],
    [t]
  );

  const content: ReactElement[] = useMemo(
    () => [
      <Challenge
        key={`${props.project.id}_challenge`}
        text={props.project.challenge}
      />,
      <Requirements
        key={`${props.project.id}_key`}
        requirements={props.project.requirements}
      />,
      <Customer
        customer={props.project.customer}
        key={`${props.project.id}_customer`}
      />,
      <MyRoles
        myRoles={props.project.myRoles as any as IRole[]}
        key={`${props.project.id}_myRoles`}
      />,
      <TechStack
        technologies={props.project.techStack}
        key={`${props.project.id}_techStack`}
      />,
    ],
    [
      props.project.challenge,
      props.project.customer,
      props.project.id,
      props.project.myRoles,
      props.project.requirements,
      props.project.techStack,
    ]
  );

  return (
    <div className={style(styles.projectDetails, props.className)}>
      {isLargeScreen && (
        <Tabstrip
          captions={tabNames}
          className={styles.tabstrip}
          darkMode
          onTabSelect={setSelectedTabIndex}
          selectedTabIndex={0}
        />
      )}
      {isLargeScreen && (
        <div className={styles.tabstripContent}>
          {content[selectedTabIndex] ?? <></>}
        </div>
      )}
      {!isLargeScreen && <Accordion titles={tabNames}>{content}</Accordion>}
    </div>
  );
};
