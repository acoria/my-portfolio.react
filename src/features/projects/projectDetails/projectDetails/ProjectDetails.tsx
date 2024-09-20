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
import { Usage } from "../usage/Usage";

export const ProjectDetails: React.FC<IProjectDetailsProps> = (props) => {
  const { t } = useTranslation();
  const { isLargeScreen } = useScreenSize();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const { challenge, requirements, customer, myTasks, techStack, usage } =
    props.project;

  const tabNames: () => string[] = useCallback(() => {
    const tabNames = [];
    challenge && tabNames.push(t(texts.projects.projectDetails.tabs.challenge));
    requirements &&
      tabNames.push(t(texts.projects.projectDetails.tabs.requirements));
    customer && tabNames.push(t(texts.projects.projectDetails.tabs.customer));
    myTasks && tabNames.push(t(texts.projects.projectDetails.tabs.myTasks));
    techStack && tabNames.push(t(texts.projects.projectDetails.tabs.techStack));
    usage && tabNames.push(t(texts.projects.projectDetails.tabs.usages));
    return tabNames;
  }, [challenge, customer, myTasks, requirements, t, techStack, usage]);

  const content: () => ReactElement[] = useCallback(() => {
    const content = [];
    challenge &&
      content.push(
        <Challenge key={`${props.project.id}_challenge`} text={challenge} />
      );
    requirements &&
      content.push(
        <Requirements
          key={`${props.project.id}_key`}
          requirements={requirements}
        />
      );
    customer &&
      content.push(
        <Customer key={`${props.project.id}_customer`} customer={customer} />
      );
    myTasks &&
      content.push(
        <MyTasks
          myTasks={myTasks as any as ITask[]}
          key={`${props.project.id}_myTasks`}
        />
      );
    techStack &&
      content.push(
        <TechStack
          technologies={techStack}
          key={`${props.project.id}_techStack`}
        />
      );
    usage && content.push(<Usage usages={usage} />);
    return content;
  }, [
    challenge,
    customer,
    myTasks,
    props.project.id,
    requirements,
    techStack,
    usage,
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
