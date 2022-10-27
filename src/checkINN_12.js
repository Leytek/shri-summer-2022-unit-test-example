import { calcCheckNumber } from './calcCheckNumber';
import { calcCheckSum } from './calcCheckSum';

export const checkINN_12 = (str) => {
  if (calcCheckNumber(calcCheckSum(str.slice(0, -1))) !== Number(str[10]) ||
      calcCheckNumber(calcCheckSum(str)) !== Number(str[11])) return false;
  return true;
}
