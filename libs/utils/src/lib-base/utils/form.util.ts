export const createSelectOptionUtil = (
  data: any = [],
  label = '',
  value = '',
  addEmpty = true
): any => {
  const selectStoryOption = data.map((el: any) => {
    return { label: el?.[label], value: el?.[value] };
  });

  if (addEmpty) {
    selectStoryOption.unshift({
      label: 'Select An Option',
      value: null,
    });
  }

  return selectStoryOption;
};
