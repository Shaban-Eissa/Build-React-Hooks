export function useState<State>(initialState: State) {
  const state = initialState;
  const setState = () => {};
  return [state, setState] as const;
}
