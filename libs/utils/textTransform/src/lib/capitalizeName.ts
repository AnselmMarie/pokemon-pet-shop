export const capitalizeName = (name: string): string => {
  if (!name) {
    return '';
  }
  return name.replace(/^\w/, (el: string) => {
    return el.toUpperCase();
  });
};
