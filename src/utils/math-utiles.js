/**
 *
 * @param {*} range 随机的范围
 * @returns [0,range)
 */
export const getRandomNumber = (range) => {
  return Math.floor(Math.random() * range);
};
