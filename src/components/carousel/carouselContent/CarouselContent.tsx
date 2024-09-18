import { ICarouselContentProps } from "./ICarouselContentProps";
import styles from "./CarouselContent.module.scss";
import { useCarouselContentViewModel } from "./useCarouselContentViewModel";
import { style } from "../../../core/utils/style";
import { IconButton } from "../../button/iconButton/IconButton";
import { CSSProperties, ReactElement } from "react";
import { CarouselItem } from "../carouselItem/CarouselItem";
import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron_right.svg";

export const CarouselContent: React.FC<ICarouselContentProps> = (props) => {
  const viewModel = useCarouselContentViewModel(props);
  const widthStyle: CSSProperties = { width: `${viewModel.carouselWidth}rem` };

  const carouselItems = (): ReactElement | ReactElement[] => {
    if (viewModel.children === undefined) return <></>;
    if (Array.isArray(viewModel.children)) {
      return viewModel.children.map((child, index) => (
        <CarouselItem
          key={index}
          widthStyle={widthStyle}
          onMovedIntoView={() => {
            viewModel.isMobileView && viewModel.setVisibleItemPosition(index);
          }}
          isZoomable={!viewModel.isMobileView}
          positionInCarousel={index}
          onClick={viewModel.onCarouselItemClick}
        >
          {child}
        </CarouselItem>
      ));
    } else {
      return (
        <CarouselItem widthStyle={widthStyle} positionInCarousel={0}>
          {viewModel.children}
        </CarouselItem>
      );
    }
  };

  const navButtons = () => {
    if (Array.isArray(viewModel.children)) {
      return viewModel.children.map((_, index) => (
        <button
          key={index}
          className={style(
            styles.navButton,
            index === viewModel.visibleItemPosition
              ? styles.navButtonActive
              : ""
          )}
          onClick={() =>
            viewModel.setVisibleItemPosition((previous) => {
              return viewModel.scrollToPosition(previous, index);
            })
          }
        />
      ));
    } else {
      return (
        <button className={style(styles.navButton, styles.navButtonActive)} />
      );
    }
  };

  return (
    <div className={styles.carouselContent}>
      <div className={styles.carousel}>
        {!viewModel.isMobileView && (
          <IconButton onClick={viewModel.triggerMoveLeft}>
            <ChevronLeft
              className={style(
                styles.chevron,
                viewModel.hasSingleItem ? styles.navButtonInactive : ""
              )}
            />
          </IconButton>
        )}
        <div
          className={styles.carouselItemsContainer}
          style={widthStyle}
          ref={viewModel.ref}
          onClick={props.onClick}
        >
          {carouselItems()}
        </div>
        {!viewModel.isMobileView && (
          <IconButton onClick={viewModel.triggerMoveRight}>
            <ChevronRight
              className={style(
                styles.chevron,
                viewModel.hasSingleItem ? styles.navButtonInactive : ""
              )}
            />
          </IconButton>
        )}
      </div>
      <div className={styles.navigation}>{navButtons()}</div>
    </div>
  );
};
