export interface IHeaderProps {
  navItems: string[];
  onNavItemClick?: (index: number) => void;
  onLogoClicked?: () => void;
}
