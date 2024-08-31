export const capitalizeContentUtil = (str: string): string => {
  return str.replace(/\b[a-z]/, (el) => {
    return el.toUpperCase();
  });
};
