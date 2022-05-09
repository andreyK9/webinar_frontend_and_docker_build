import { useCallback, useState } from 'react';

export const useDropdownState = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);
  const toggle = useCallback(() => setVisible(visible => !visible), []);

  return { visible, open, close, toggle };
};
