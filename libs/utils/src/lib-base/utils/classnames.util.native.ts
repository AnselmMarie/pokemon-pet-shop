export const classNamesUtil = (...args) => {
  const mergedStyles = args.reduce((accumulator, currentValue) => {
    let newAcc = accumulator;
    let newCurVal = currentValue;
    if (typeof newAcc !== 'object' || newAcc === undefined) {
      newAcc = {};
    }
    if (typeof newCurVal !== 'object' || newCurVal === undefined) {
      newCurVal = {};
    }
    return { ...newAcc, ...newCurVal };
  });

  return mergedStyles;
};
