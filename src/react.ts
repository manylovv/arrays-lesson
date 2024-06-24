export const useState = <T>(initialValue: T) => {
  let state = initialValue as T;

  const setState = (newState: T) => {
    state = newState;
  };

  return [state, setState] as const;
};
