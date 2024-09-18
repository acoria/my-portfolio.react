import { ReactElement, useCallback, useState } from "react";
import { Accordion } from "../../../../components/accordion/Accordion";
import { Tabstrip } from "../../../../components/tabstrip/Tabstrip";
import { style } from "../../../../core/utils/style";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ITask } from "../../../../shared/model/ITask";
import { Challenge } from "../challenge/Challenge";
import { Customer } from "../customer/Customer";
import { MyTasks } from "../myTasks/MyTasks";
import { Requirements } from "../requirements/Requirements";
import { TechStack } from "../techStack/TechStack";
import { IProjectDetailsProps } from "./IProjectDetailsProps";
import styles from "./ProjectDetails.module.scss";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const { t } = useTranslation();
  const { isLargeScreen } = useScreenSize();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabNames: () => string[] = useCallback(() => {
    const tabNames = [];
    props.project.challenge &&
      tabNames.push(t(texts.projects.projectDetails.tabs.challenge));
    props.project.requirements &&
      tabNames.push(t(texts.projects.projectDetails.tabs.requirements));
    props.project.customer &&
      tabNames.push(t(texts.projects.projectDetails.tabs.customer));
    props.project.myTasks &&
      tabNames.push(t(texts.projects.projectDetails.tabs.myTasks));
    props.project.techStack &&
      tabNames.push(t(texts.projects.projectDetails.tabs.techStack));
    return tabNames;
  }, [t]);

  const content: () => ReactElement[] = useCallback(() => {
    const content = [];
    props.project.challenge &&
      content.push(
        <Challenge
          key={`${props.project.id}_challenge`}
          text={props.project.challenge}
        />
      );
    props.project.requirements &&
      content.push(
        <Requirements
          key={`${props.project.id}_key`}
          requirements={props.project.requirements}
        />
      );
    props.project.customer &&
      content.push(
        <Customer
          key={`${props.project.id}_customer`}
          customer={props.project.customer}
        />
      );
    props.project.myTasks &&
      content.push(
        <MyTasks
          myTasks={props.project.myTasks as any as ITask[]}
          key={`${props.project.id}_myTasks`}
        />
      );
    props.project.techStack &&
      content.push(
        <TechStack
          technologies={props.project.techStack}
          key={`${props.project.id}_techStack`}
        />
      );
    return content;
  }, [
    props.project.challenge,
    props.project.customer,
    props.project.id,
    props.project.myTasks,
    props.project.requirements,
    props.project.techStack,
  ]);

  return (
    <div className={style(styles.projectDetails, props.className)}>
      {isLargeScreen && (
        <Tabstrip
          captions={tabNames()}
          className={styles.tabstrip}
          darkMode
          onTabSelect={setSelectedTabIndex}
          selectedTabIndex={0}
        />
      )}
      {isLargeScreen && (
        <div className={styles.tabstripContent}>
          {content()[selectedTabIndex] ?? <></>}
        </div>
      )}
      {!isLargeScreen && <Accordion titles={tabNames()}>{content()}</Accordion>}
    </div>
  );
};
