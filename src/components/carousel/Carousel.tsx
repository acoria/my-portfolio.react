import { CSSProperties, ReactElement } from "react";
import { ReactComponent as ChevronLeft } from "../../assets/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron_right.svg";
import { style } from "../../core/utils/style";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./carouselItem/CarouselItem";
import { ICarouselProps } from "./ICarouselProps";
import { useCarouselViewModel } from "./useCarouselViewModel";
import { ReactComponent as CloseButton } from "../../assets/close.svg";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const viewModel = useCarouselViewModel(props);
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
    <div className={styles.carousel}>
      <div
        className={style(
          styles.zoomedInChild,
          viewModel.showZoomedInImagePosition !== undefined
            ? styles.displayZoomedInChild
            : ""
        )}
      >
        <CloseButton
          className={styles.closeButton}
          onClick={viewModel.onZoomedInCloseButtonClick}
        />
        {viewModel.getChildAsPosition(viewModel.showZoomedInImagePosition)}
      </div>
      <div className={styles.carouselContent}>
        {!viewModel.isMobileView && (
          <ChevronLeft
            className={style(
              styles.chevron,
              viewModel.hasSingleItem ? styles.navButtonInactive : ""
            )}
            onClick={viewModel.triggerMoveLeft}
          />
        )}
        <div
          className={styles.carouselItemsContainer}
          style={widthStyle}
          ref={viewModel.ref}
        >
          {carouselItems()}
        </div>
        {!viewModel.isMobileView && (
          <ChevronRight
            className={style(
              styles.chevron,
              viewModel.hasSingleItem ? styles.navButtonInactive : ""
            )}
            onClick={viewModel.triggerMoveRight}
          />
        )}
      </div>
      <div className={styles.navigation}>{navButtons()}</div>
    </div>
  );
};
