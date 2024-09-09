import { Accordion } from "../../../components/accordion/Accordion";
import { SkillContent } from "../skillContent/SkillContent";
import { ISkillAccordionProps } from "./ISkillAccordionProps";
import styles from "./SkillAccordion.module.scss";

export const SkillAccordion: React.FC<ISkillAccordionProps> = (props) => {
  return (
    <Accordion
      titles={[props.skill.title]}
      headerClassName={styles.header}
      titleClassName={styles.title}
      contentClassName={styles.content}
    >
      <SkillContent skill={props.skill} />
    </Accordion>
  );
};
