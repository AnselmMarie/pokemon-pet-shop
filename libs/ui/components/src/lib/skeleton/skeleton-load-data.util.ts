const getSkeletonArr = <T>(nestedArray: boolean, loadingTemplate: T, arrCount: number) => {
  const data = { data: Array(arrCount).fill(loadingTemplate) };
  return nestedArray ? [data] : [data];
};

export const skeletonLoadDataUtil = <T, U>(
  data: T,
  isLoading = false,
  loadingTemplate: U | Record<string, unknown> = {},
  nestedArray = false,
  arrCount = 4
) => {
  return !isLoading ? data : getSkeletonArr(nestedArray, loadingTemplate, arrCount);
};
