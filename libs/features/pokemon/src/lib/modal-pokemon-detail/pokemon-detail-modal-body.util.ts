export const convertKgToLbs = (weight: number): { lbs: string; kg: string } => {
  const stringKgNoDecimal = String(weight);

  const kgDecimal = stringKgNoDecimal.replace(/\w$/, (el) => {
    return `.${el}`;
  });

  const mathRound = Math.round(Number(kgDecimal));

  let lbs = 0;
  for (let loop = 0; loop < mathRound; loop++) {
    lbs = lbs + 2.20462;
  }

  return { lbs: `${Math.trunc(lbs)} lbs`, kg: `(${kgDecimal} kg)` };
};

const convertFtInches = (
  dFt: string | null = null,
  dIn: string | null = null,
  ftInObj: { ft: string; in: string; m: string } = { ft: '', in: '', m: '' }
) => {
  const feet = Number(dFt);
  const inches = Math.round(Number(`.${dIn}`) * 12);

  if (inches === 12) {
    ftInObj.ft = `${feet + 1}'`;
    ftInObj.in = `0"`;
    return;
  }

  ftInObj.ft = `${feet}'`;
  ftInObj.in = `${String(inches)}"`;
};

export const convertMetersToFtIn = (height: number): { ft: string; in: string; m: string } => {
  const stringKgNoDecimal = String(height);

  const mDecimal = stringKgNoDecimal.replace(/\w$/, (el) => {
    return `.${el}`;
  });

  const ftTotal = Number(mDecimal) * 3.28084;
  const ftTotalSplit = String(ftTotal).split('.');
  const ftInObj = {
    ft: '',
    in: '',
    m: `(${mDecimal} m)`,
  };

  if (ftTotalSplit.length === 2) {
    convertFtInches(ftTotalSplit[0], ftTotalSplit[1], ftInObj);
  } else {
    convertFtInches(ftTotalSplit[1], null, ftInObj);
  }

  return ftInObj;
};
