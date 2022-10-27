import { isINN } from '.';
import { calcCheckSum } from './calcCheckSum';
import { calcCheckNumber } from './calcCheckNumber';
import { checkINN_10 } from './checkINN_10';
import { checkINN_12 } from './checkINN_12';

describe('Function isINN', () => {
    it('Return false if input not a number or string', () => {
        expect(isINN(null)).toBe(false);
        expect(isINN(undefined)).toBe(false);
        expect(isINN(NaN)).toBe(false);
        expect(isINN(true)).toBe(false);
        expect(isINN(false)).toBe(false);
        expect(isINN(1n)).toBe(false)
        expect(isINN(Symbol('bar'))).toBe(false);
        expect(isINN({foo: 0})).toBe(false);
        expect(isINN([0, '1'])).toBe(false);
    });

    it('Return false if string converts to NaN', () => {
        expect(isINN('')).toBe(false);
        expect(isINN('123456789s')).toBe(false);
    });

    it('Return false if length not 10 or 12', () => {
        expect(isINN(1234567)).toBe(false);
        expect(isINN('1234567')).toBe(false);
        expect(isINN('12345678')).toBe(false);
        expect(isINN('123456789')).toBe(false);
        expect(isINN('12345678901')).toBe(false);
        expect(isINN('1234567890123')).toBe(false);
        expect(isINN('12345678901234')).toBe(false);
        expect(isINN(12345678901234)).toBe(false);
    });

    it('Return true if INN is correct', () => {
        expect(isINN('7743013901')).toBe(true);
        expect(isINN(7743013901)).toBe(true);
    });

    it('Return false if INN is not correct', () => {
        expect(isINN('7743013902')).toBe(false);
    });

    it('Return true if INN is correct', () => {
        expect(isINN('774301390267')).toBe(true);
        expect(isINN(774301390267)).toBe(true);
    });

    it('Return false if INN is not correct', () => {
        expect(isINN('774301390278')).toBe(false);
    });
});

describe('Function calcCheckSum', () => {
    it('Return correct checksum', () => {
        expect(calcCheckSum('7743013902')).toBe(166);
        expect(calcCheckSum('77430139026')).toBe(193);
        expect(calcCheckSum('774301390267')).toBe(249);
    });
});

describe('Function calcCheckNumber', () => {
    it('Return correct check number', () => {
        expect(calcCheckNumber(166)).toBe(1);
        expect(calcCheckNumber(193)).toBe(6);
        expect(calcCheckNumber(249)).toBe(7);
        expect(calcCheckNumber(21)).toBe(0);
    });
});

describe('Function checkINN_10', () => {
    it('Return true if INN is correct', () => {
        expect(checkINN_10('7743013901')).toBe(true);
    });

    it('Return false if INN is not correct', () => {
        expect(checkINN_10('7743013902')).toBe(false);
    });
});

describe('Function checkINN_12', () => {
    it('Return true if INN is correct', () => {
        expect(checkINN_12('774301390267')).toBe(true);
    });

    it('Return false if INN is not correct', () => {
        expect(checkINN_12('774301390278')).toBe(false);
    });
});
