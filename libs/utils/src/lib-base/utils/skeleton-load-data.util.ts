export const skeletonLoadDataUtil = (data: any, isLoading = false, arrCount = 4) => {
  return !isLoading ? data : Array(arrCount).fill({});
};
