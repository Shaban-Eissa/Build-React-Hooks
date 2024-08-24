import { render } from "../../main";

let state: any, setState: any;

export function useState<State>(initialState: State) {
  if (state === undefined) {
    state = initialState;
    setState = (newState: State) => {
      state = newState;
      render();
    };
  }
  return [state, setState] as [State, (newState: State) => void];
}
