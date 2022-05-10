export const addJustModificator =
  (block: string, modificator: string) => (needAdd?: boolean) => {
    return needAdd ? ` ${block}--${modificator}` : '';
  };
