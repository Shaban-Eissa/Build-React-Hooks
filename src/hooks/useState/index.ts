import { render } from "../../main";

export function useState<State>(initialState: State) {
  let state = initialState;
  const setState = (newState: State) => {
    state = newState;

    render();
  };
  return [state, setState] as const;
}
