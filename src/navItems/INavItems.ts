import { ReactElement } from "react";
import { ISignal } from "../core/types/ISignal";

export interface INavItem {
  caption: string;
  subCaption?: string;
  scrollToSignal: ISignal | undefined;
  signalTrigger: () => void;
  component: ReactElement;
}
