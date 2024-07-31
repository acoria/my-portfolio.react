export interface ITabstripItemProps {
  caption: string;
  onClick?: () => void;
  selected: boolean;
  classNameSelected?: string;
}
