import { CSSProperties, ReactElement } from "react";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron_right.svg";
import { ReactComponent as CloseButton } from "../../assets/icons/close.svg";
import { style } from "../../core/utils/style";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./carouselItem/CarouselItem";
import { ICarouselProps } from "./ICarouselProps";
import { useCarouselViewModel } from "./useCarouselViewModel";
import { IconButton } from "../button/iconButton/IconButton";
import { useModal } from "../modal/useModal";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const viewModel = useCarouselViewModel(props);
  const widthStyle: CSSProperties = { width: `${viewModel.carouselWidth}rem` };
  const modal = useModal();

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
      {modal.content}
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
        {viewModel.getChildAtPosition(viewModel.showZoomedInImagePosition)}
      </div>
      <div className={styles.carouselContent}>
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
          onClick={() => modal.show(<div>Test</div>)}
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
