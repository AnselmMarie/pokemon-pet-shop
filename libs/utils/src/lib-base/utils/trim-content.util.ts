export const trimContentUtil = (val: string, trimmed = 60): string => {
  return `${val.substring(0, trimmed)}${val.length > trimmed ? '...' : ''}`;
};
