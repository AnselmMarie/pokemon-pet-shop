export const capitalizeContentUtil = (str: string): string => {
  return str.replace(/\b[a-z]/, (el) => {
    return el.toUpperCase();
  });
};

export const capitalizeNameUtil = (name: string): string => {
  return name.replace(/^\w/, (el: string) => {
    return el.toUpperCase();
  });
};
