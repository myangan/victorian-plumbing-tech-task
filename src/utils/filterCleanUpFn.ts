/* eslint-disable @typescript-eslint/no-explicit-any */
const FilerCleanUpFn = (filters: Record<string, any>) => {
  const cleanedFilters: Record<string, any> = {};

  Object.keys(filters).forEach((key) => {
    if (filters[key] && filters[key].length > 0) {
      cleanedFilters[key] = filters[key];
    }
  });

  return cleanedFilters;
};

export default FilerCleanUpFn;
