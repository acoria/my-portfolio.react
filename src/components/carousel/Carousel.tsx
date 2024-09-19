import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";

import { useModal } from "../modal/useModal";
import { CarouselContent } from "./carouselContent/CarouselContent";
import { useState } from "react";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const [visibleItemPosition, setVisibleItemPosition] = useState(0);

  const modal = useModal();

  const onZoomClick = () => {
    //todo: is mobile view
    modal.show(
      <CarouselContent
        {...props}
        initialItemPosition={visibleItemPosition}
        widthInRem={80}
      />,
      true
    );
  };

  return (
    <div className={styles.carousel}>
      {modal.content}
      {/* <CloseButton
          className={styles.closeButton}
          onClick={viewModel.onZoomedInCloseButtonClick}
        /> */}
      <CarouselContent
        {...props}
        onClick={onZoomClick}
        onItemChange={setVisibleItemPosition}
      />
    </div>
  );
};
