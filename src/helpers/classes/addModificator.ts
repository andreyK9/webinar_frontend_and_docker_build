export const addModificator =
  (block: string, modificator: string) => (needAdd?: boolean) => {
    return needAdd ? `${block} ${block}--${modificator}` : block;
  };
