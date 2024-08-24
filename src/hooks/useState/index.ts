export function useState<State>(initialState: State) {
  let state = initialState;
  const setState = (newState: State) => (state = newState);
  return [state, setState] as const;
}
