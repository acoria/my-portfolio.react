import { Carousel } from "../../../components/carousel/Carousel";
import { DateTime } from "../../../core/services/date/DateTime";
import { useRenderMonth } from "../../../hooks/useRenderMonth";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { ProjectDetails } from "../projectDetails/projectDetails/ProjectDetails";
import { IProjectProps } from "./IProjectProps";
import styles from "./Project.module.scss";

export const Project: React.FC<IProjectProps> = (props) => {
  const renderMonth = useRenderMonth();
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenSize();

  let startMonth: string = "";
  let startYear: number = 0;
  let endMonth: string = "";
  let endYear: number = 0;

  const showDate = props.project.start && props.project.end;

  if (props.project.start && props.project.end) {
    startMonth = renderMonth(DateTime.toMonth(props.project.start), true);
    startYear = DateTime.toYear(props.project.start);
    endMonth = renderMonth(DateTime.toMonth(props.project.end), true);
    endYear = DateTime.toYear(props.project.end);
  }

  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h1 className={styles.title}>{props.project.title}</h1>
        {showDate && (
          <span
            className={styles.date}
          >{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</span>
        )}
      </div>
      <p className={styles.goal}>{props.project.goal}</p>
      <div className={styles.images}>
        {props.project.images && (
          <Carousel widthInRem={40}>
            {props.project.images.map((image) => (
              <img
                key={image.imageUrl}
                src={image.imageUrl}
                alt={image.altText}
                className={styles.image}
              />
            ))}
          </Carousel>
        )}
      </div>
      <ProjectDetails
        project={props.project}
        className={styles.projectDetails}
      />
    </div>
  );
};
