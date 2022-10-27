export const calcCheckSum = (str) => {
  const weights = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
  const offset = weights.length - str.length;
  return str.split``.reduce((sum, char, i) => sum + (Number(char) * weights[i + offset]), 0);
};
