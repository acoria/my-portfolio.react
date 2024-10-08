import { Carousel } from "../../../components/carousel/Carousel";
import { DateTime } from "../../../core/services/date/DateTime";
import { useRenderMonth } from "../../../hooks/useRenderMonth";
import { ProjectDetails } from "../projectDetails/projectDetails/ProjectDetails";
import { IProjectProps } from "./IProjectProps";
import styles from "./Project.module.scss";
import dimensions from "../../../styles/dimensions.module.scss";
import { ReactComponent as OpenInNew } from "../../../assets/icons/open_in_new.svg";
import { AppConfig } from "../../../AppConfig";
import { useScreenSize } from "../../../hooks/useScreenSize";
import { Link } from "../../../components/link/Link";

export const Project: React.FC<IProjectProps> = (props) => {
  const renderMonth = useRenderMonth();
  const { isLargeScreen } = useScreenSize();

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
        <div className={styles.titleAndLink}>
          <h1 className={styles.title}>{props.project.title}</h1>
          {props.project.link && isLargeScreen && (
            <Link to={AppConfig.COLOR_PALETTE_GENERATOR_LINK} openInNewTab>
              <OpenInNew className={styles.openInNewIcon} />
            </Link>
          )}
        </div>
        {showDate && (
          <span
            className={styles.date}
          >{`${startMonth} ${startYear} - ${endMonth} ${endYear}`}</span>
        )}
      </div>
      <p className={styles.goal}>{props.project.goal}</p>
      <div className={styles.images}>
        {props.project.images && (
          <Carousel widthInRem={+dimensions.projectDetailsWidth}>
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
