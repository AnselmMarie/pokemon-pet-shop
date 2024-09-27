export const capitalizeContentUtil = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.replace(/\b[a-z]/, (el) => {
    return el.toUpperCase();
  });
};

export const capitalizeNameUtil = (name: string): string => {
  if (!name) {
    return '';
  }
  return name.replace(/^\w/, (el: string) => {
    return el.toUpperCase();
  });
};

export const removeHtmlCodeInStringUtil = (str = ''): string => {
  if (!str) {
    return '';
  }
  return str.replace(/\n|\f/g, ' ');
};
