import { incrementHookIndex } from "../useState";

type EffectCallback = () => void;
export const effects: Array<{
  callback: EffectCallback;
  deps?: Array<any>;
  prevDeps?: Array<any>;
}> = [];

export function useEffect(callback: EffectCallback, deps?: Array<any>) {
  const id = incrementHookIndex();
  effects[id] = { callback, deps, prevDeps: effects[id]?.deps };
}
