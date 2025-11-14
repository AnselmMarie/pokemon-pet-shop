export const capitalizeContent = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/\b[a-z]/, (el) => {
    return el.toUpperCase();
  });
};
