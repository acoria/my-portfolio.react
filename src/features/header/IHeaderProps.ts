export interface IHeaderProps {
  className?: string;
  navItems?: string[];
  onNavItemClick?: (index: number | undefined) => void;
  onLogoClicked?: () => void;
  onHeightChange?: (height: number) => void;
  selectedTabIndex?: number;
}
