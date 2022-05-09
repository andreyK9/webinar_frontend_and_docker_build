import { useEffect } from 'react';

export const useAddHendlerFor = <T extends any>(state: T, handler?: Function) => {
  useEffect(() => {
    handler?.(state);
  }, [state, handler]);
};
