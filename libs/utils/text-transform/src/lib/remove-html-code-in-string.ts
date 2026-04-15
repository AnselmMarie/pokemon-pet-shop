export const removeHtmlCodeInString = (str = ''): string => {
  if (!str) {
    return '';
  }
  return str.replace(/\n|\f/g, ' ');
};
