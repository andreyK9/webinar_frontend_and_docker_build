export const mergeClasses = (firstClass?: string, secondClass?: string) => {
  return [firstClass, secondClass].filter(Boolean).join(' ');
};
