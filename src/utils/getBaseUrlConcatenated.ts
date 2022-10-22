export const getBaseUrlConcatenated = (query: string): string => {
  return `https://api.github.com/users/${query}/repos?sort=created`;
};
