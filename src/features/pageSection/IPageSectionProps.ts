import { ReactElement } from "react";
import { ISignal } from "../../core/types/ISignal";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IPageSectionProps extends IHaveClassName {
  title: string;
  subTitle?: string | ReactElement;
  topOffsetInPixel?: string;
  children?: ReactElement | ReactElement[];
  onChangeViewportVisibility?: (visible: boolean) => void;
  scrollIntoViewSignal?: ISignal;
}
