import { ReactElement } from "react";
import { ISignal } from "../core/types/ISignal";

export interface INavItem {
  caption: string;
  scrollToSignal: ISignal | undefined;
  signalTrigger: () => void;
  component: ReactElement;
}
