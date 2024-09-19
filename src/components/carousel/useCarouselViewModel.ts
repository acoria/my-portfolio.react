import { useScreenSize } from "../../hooks/useScreenSize";

export const useCarouselViewModel = () => {
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isMobileView = isSmallScreen || isMediumScreen;

  return { isMobileView };
};
