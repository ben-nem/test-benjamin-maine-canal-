import { useCallback, useState } from 'react';

export type IToggle = () => void;
// https://usehooks.com/useToggle/
export const useToggle = (initialState = false): [boolean, IToggle] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle: IToggle = useCallback(
    (): void => setState((state) => !state),
    []
  );
  return [state, toggle];
};
