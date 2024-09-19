import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";
import { useModal } from "../modal/useModal";
import { CarouselContent } from "./carouselContent/CarouselContent";
import { useState } from "react";
import { useCarouselViewModel } from "./useCarouselViewModel";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const viewModel = useCarouselViewModel();
  const [visibleItemPosition, setVisibleItemPosition] = useState(0);
  const modal = useModal();

  const onZoomClick = () => {
    !viewModel.isMobileView &&
      modal.show(
        <CarouselContent
          {...props}
          initialItemPosition={visibleItemPosition}
          isMobileView={viewModel.isMobileView}
          widthInRem={undefined}
        />,
        true
      );
  };

  return (
    <div className={styles.carousel}>
      {modal.content}
      <CarouselContent
        {...props}
        isMobileView={viewModel.isMobileView}
        onClick={onZoomClick}
        onItemChange={setVisibleItemPosition}
      />
    </div>
  );
};
