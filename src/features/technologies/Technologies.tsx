import { Accordion } from "../../components/accordion/Accordion";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { Technology } from "../../types/Technology";
import { ITechnologiesProps } from "./ITechnologiesProps";
import styles from "./Technologies.module.scss";

export const Technologies: React.FC<ITechnologiesProps> = (props) => {
  const { t } = useTranslation();
  const mapTechnologyToText = (tech: Technology): string => {
    const techIndex = Object.keys(Technology).findIndex(
      (technology) => technology === tech
    );
    return Object.values(Technology)[techIndex];
  };

  return (
    <div className={styles.technologies}>
      <Accordion titles={["Hello", "Second", "third"]}>
        <div>Hello content</div>
        <div>
          Second content..much
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger6
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger7
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger8
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger9
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger10
        </div>
        <div>
          Second content..much
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
          loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger
        </div>
      </Accordion>
      {/* {props.technologies.map((technology) => (
        <div className={styles.type} key={technology.type}>
          <h5>{technology.type}</h5>
          <div className={styles.techStack}>
            {technology.technologies.map((technology) => (
              <div className={styles.tech} key={technology}>
                {mapTechnologyToText(technology)}
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};
