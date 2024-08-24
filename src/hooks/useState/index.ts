import { render } from "../../main";

export const INITIALIZATION = Symbol("phase.initialization");
export const UPDATE = Symbol("phase.update");

export type Phase = typeof INITIALIZATION | typeof UPDATE;
export let phase: Phase;

let state: any, setState: any;

export function setPhase(newPhase: Phase) {
  phase = newPhase;
}

export function useState<State>(initialState: State) {
  if (phase === INITIALIZATION) {
    state = initialState;
    setState = (newState: State) => {
      state = newState;
      render(UPDATE);
    };
  }
  return [state, setState] as [State, (newState: State) => void];
}
