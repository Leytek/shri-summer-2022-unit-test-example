import { calcCheckNumber } from './calcCheckNumber';
import { calcCheckSum } from './calcCheckSum';

export const checkINN_10 = (str) => {
  if (calcCheckNumber(calcCheckSum(str)) !== Number(str[9])) return false;
  return true;
}
