import useWindowDimensions from "./useWindowDimensions";
import dimens from "../styles/dimensions.module.scss";

export const useScreenSize = (
  mediumScreenWidthInRem?: number,
  largeScreenWidthInRem?: number
) => {
  const { width } = useWindowDimensions();

  const mediumScreenWidth =
    (mediumScreenWidthInRem || +dimens.mediumScreenWidth) * 16;
  const largeScreenWidth =
    (largeScreenWidthInRem || +dimens.largeScreenWidth) * 16;

  const isSmallScreen = width < mediumScreenWidth;
  const isMediumScreen = width >= mediumScreenWidth && width < largeScreenWidth;
  const isLargeScreen = width >= largeScreenWidth;

  isSmallScreen && console.log(`isSmallScreen`);
  isMediumScreen && console.log(`isMediumScreen`);
  isLargeScreen && console.log(`isLargeScreen`);

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};
