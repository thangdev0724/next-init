import queryString from 'query-string';

/**
 * @description Convert object thành query trên url
 * @example {foo: 'bar'} => foo=bar
 */
export const stringtifyQuery = (object: object) => {
  return queryString.stringify(object, {
    skipEmptyString: true,
    skipNull: true,
  });
};

export const delay = (delay: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
