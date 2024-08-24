import { incrementHookIndex } from "../useState";

type EffectCallback = () => void;
export const effects: Array<{
  callback: EffectCallback;
}> = [];

export function useEffect(callback: EffectCallback) {
  const id = incrementHookIndex();
  effects[id] = { callback };
}
