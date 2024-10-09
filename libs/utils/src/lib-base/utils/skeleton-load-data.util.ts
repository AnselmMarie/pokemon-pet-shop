const getSkeletonArr = (nestedArray: boolean, loadingTemplate: any, arrCount: number) => {
  const data = Array(arrCount).fill(loadingTemplate);
  return nestedArray ? [data] : data;
};

export const skeletonLoadDataUtil = (
  data: any,
  isLoading = false,
  loadingTemplate = {},
  nestedArray = false,
  arrCount = 4
) => {
  return !isLoading ? data : getSkeletonArr(nestedArray, loadingTemplate, arrCount);
};
