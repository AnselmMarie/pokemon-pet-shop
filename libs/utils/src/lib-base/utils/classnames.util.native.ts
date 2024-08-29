export const classNamesUtil = (...args) => {
  const mergedStyles = args.reduce((accumulator, currentValue) => {
    let newAcc = accumulator;
    let newCurVal = currentValue;
    if (typeof accumulator !== 'object') {
      newAcc = {};
    }
    if (typeof accumulator !== 'object') {
      newCurVal = {};
    }
    return { ...newAcc, ...newCurVal };
  });

  return mergedStyles;
};
