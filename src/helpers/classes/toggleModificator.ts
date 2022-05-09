export const toggleModificator =
  (block: string, disabled: string, enabled: string) => (active?: boolean) => {
    return `${block} ${block}--${active ? enabled : disabled}`;
  };
