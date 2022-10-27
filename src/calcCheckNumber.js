export const calcCheckNumber = (sum) => {
  const num = sum % 11;
  return num > 9 ? 0 : num;
};
