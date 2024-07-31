export interface ITabstripProps {
  captions: string[];
  onTabSelect?: (index: number) => void;
  className?: string;
}
