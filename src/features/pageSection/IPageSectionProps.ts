import { ReactElement } from "react";
import { ISignal } from "../../core/types/ISignal";

export interface IPageSectionProps {
  title: string;
  topOffsetInPixel?: string;
  children?: ReactElement | ReactElement[];
  onChangeViewportVisibility?: (visible: boolean) => void;
  scrollIntoViewSignal?: ISignal;
}
