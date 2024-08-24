import { render } from "../../main";

export const INITIALIZATION = Symbol("phase.initialization");
export const UPDATE = Symbol("phase.update");

export type Phase = typeof INITIALIZATION | typeof UPDATE;
export let phase: Phase;

export let hookIndex = 0;
const states: Array<[any, (newState: any) => void]> = [];

export function setPhase(newPhase: Phase) {
  phase = newPhase;
}

export function resetState() {
  hookIndex = 0;
}

export function incrementHookIndex() {
  return hookIndex++;
}

export function useState<State>(initialState: State) {
  const id = hookIndex++;
  if (phase === INITIALIZATION) {
    states[id] = [
      initialState,
      (newState: State) => {
        states[id][0] = newState;
        render(UPDATE);
      },
    ];
  }
  return states[id] as [State, (newState: State) => void];
}
