import { useCallback, useState } from 'react';

export const useVisible = (defaultValue = false) => {
  const [visible, setVisible] = useState(defaultValue);
  const hide = useCallback(() => setVisible(false), []);
  const show = useCallback(() => setVisible(true), []);

  return { visible, show, hide };
};
