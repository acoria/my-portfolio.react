export interface IBurgerMenuProps {
  captions: string[];
  onEntrySelect?: (index: number) => void;
  topPosition?: number;
}
