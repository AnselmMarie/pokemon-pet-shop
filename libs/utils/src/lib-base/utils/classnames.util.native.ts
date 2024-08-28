export const classNamesUtil = (...args) => {
  const mergedStyles = args.reduce((accumulator, currentValue) => {
    return { ...accumulator, ...currentValue };
  }, {});
  return mergedStyles;
};
