import { Carousel } from "../../../components/carousel/Carousel";
import { DateTime } from "../../../core/services/date/DateTime";
import { useRenderMonth } from "../../../hooks/useRenderMonth";
import { ProjectDetails } from "../projectDetails/projectDetails/ProjectDetails";
import { IProjectProps } from "./IProjectProps";
import styles from "./Project.module.scss";

export const Project: React.FC<IProjectProps> = (props) => {
  const renderMonth = useRenderMonth();

  const startMonth = renderMonth(DateTime.toMonth(props.project.start), true);
  const startYear = DateTime.toYear(props.project.start);
  const endMonth = renderMonth(DateTime.toMonth(props.project.end), true);
  const endYear = DateTime.toYear(props.project.end);

  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.project.title}</h1>
        <span
          className={styles.date}
        >{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</span>
      </div>
      <p className={styles.goal}>{props.project.goal}</p>
      <div className={styles.images}>
        <Carousel widthInRem={40}>
          <img
            src={props.project.imageUrls[0]}
            alt="Blurred screenshot of app main page"
            className={styles.image}
          />
          <img
            src={props.project.imageUrls[1]}
            alt="Blurred screenshot of app main page"
            className={styles.image}
          />
          <img
            src={props.project.imageUrls[2]}
            alt="Blurred screenshot of app main page"
            className={styles.image}
          />
        </Carousel>
      </div>
        <ProjectDetails
          project={props.project}
          className={styles.projectDetails}
        />
    </div>
  );
};
