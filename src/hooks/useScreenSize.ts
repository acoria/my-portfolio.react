import useWindowDimensions from "./useWindowDimensions";
import dimens from "../styles/dimensions.module.scss";

export const useScreenSize = () => {
  const { width } = useWindowDimensions();

  return {
    isSmallScreen: width < +dimens.mediumScreenWidth * 16,
    isMediumScreen:
      width >= +dimens.mediumScreenWidth * 16 &&
      width < +dimens.largeScreenWidth * 16,
    isLargeScreen: width >= +dimens.largeScreenWidth * 16,
  };
};
