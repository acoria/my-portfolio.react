export interface IHeaderProps {
  navItems: string[];
  onNavItemClick?: (index: number) => void;
  onLogoClicked?: () => void;
  onHeightChange?: (height: number) => void;
  selectedTabIndex?: number;
  onTabSelect?: (index: number | undefined) => void;
}
