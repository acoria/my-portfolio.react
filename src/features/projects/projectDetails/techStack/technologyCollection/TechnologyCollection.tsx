import { useCallback, useMemo } from "react";
import { DetailedEntityIconList } from "../../../../../components/detailedEntityIconList/DetailedEntityIconList";
import { useTechnologyTypeName } from "../../../../../hooks/useTechnologyTypeName";
import { KeyTechnologyInfo } from "../../../../../services/KeyTechnologyInfo";
import { Technology } from "../../../../../types/Technology";
import { TechnologyTypeIcon } from "../technologyTypeIcon/TechnologyTypeIcon";
import { ITechnologyCollectionProps } from "./ITechnologyCollectionProps";
import styles from "./TechnologyCollection.module.scss";

export const TechnologyCollection: React.FC<ITechnologyCollectionProps> = (
  props
) => {
  const technologyTypeName = useTechnologyTypeName();
  const technologies = useMemo(() => Object.entries(Technology), []);
  const keyTechnologyInfo = useMemo(() => new KeyTechnologyInfo(), []);
  const mapTechnologyToText = useCallback(
    (technology: Technology): string => {
      const entry = technologies.find((tech) => tech[0] === technology);
      return entry?.[1] ?? "";
    },
    [technologies]
  );
  const keyTechnologies = useMemo(
    () =>
      keyTechnologyInfo
        .findKeyTechnologies(props.technology.technologies)
        .map(mapTechnologyToText),
    [keyTechnologyInfo, mapTechnologyToText, props.technology.technologies]
  );

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
      entries={props.technology.technologies.map(mapTechnologyToText)}
      highlightedEntries={keyTechnologies}
      separator="|"
    />
  );
};
