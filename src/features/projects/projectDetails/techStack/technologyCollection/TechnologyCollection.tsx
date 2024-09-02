import { DetailedEntityIconList } from "../../../../../components/detailedEntityIconList/DetailedEntityIconList";
import { useTechnologyTypeName } from "../../../../../hooks/useTechnologyTypeName";
import { TechnologyTypeIcon } from "../technologyTypeIcon/TechnologyTypeIcon";
import { ITechnologyCollectionProps } from "./ITechnologyCollectionProps";
import styles from "./TechnologyCollection.module.scss";

export const TechnologyCollection: React.FC<ITechnologyCollectionProps> = (
  props
) => {
  const technologyTypeName = useTechnologyTypeName();

  return (
    <DetailedEntityIconList
      entity={props.technology}
      icon={
        <TechnologyTypeIcon
          technologyType={props.technology.type}
          className={styles.icon}
        />
      }
      titleProperty="type"
      titleHook={technologyTypeName}
      className={styles.technologyCollection}
      entries={props.technology.technologies}
    />
  );
};
