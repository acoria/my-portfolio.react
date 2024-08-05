import { ISignal } from "./types/ISignal";

export class Signal implements ISignal {
  readonly createdAt: Date = new Date();
}
