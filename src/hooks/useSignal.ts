import { useState } from "react";
import { ISignal } from "../core/types/ISignal";
import { Signal } from "../core/Signal";

/**
 * Hook to administrate the signal.
 * It is responsible for providing access to a signal and to trigger it.
 * Initially no signal exists
 */
export const useSignal = (): [
  signal: ISignal | undefined,
  trigger: () => void
] => {
  const [signal, setSignal] = useState<ISignal | undefined>(undefined);

  const trigger = () => {
    setSignal(new Signal());
  };

  return [signal, trigger];
};
