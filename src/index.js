import { checkINN_10 } from './checkINN_10';
import { checkINN_12 } from './checkINN_12';

export const isINN = (input) => {
    if (typeof input !== 'string' && typeof input !== 'number') return false;

    const str = typeof input !== 'string' ? String(input) : input;

    if (Number(str) !== Number(str)) return false;

    if (str.length === 10)
      return checkINN_10(str);
    else if (str.length === 12)
      return checkINN_12(str);

    return false;
};
