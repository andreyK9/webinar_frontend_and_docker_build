export const setHandleWith =
  <T extends any>(props: T, handle: ((prop: T) => void) | undefined) =>
  () => {
    handle?.(props);
  };
