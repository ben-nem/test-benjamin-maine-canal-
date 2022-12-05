import { calculateRateStarsNumber } from '@/utils/calculateRateStarsNumber';

describe('calculateRateStarsNumber', () => {
  test('1) it should 0 if rate if lower than 1', () => {
    const expectedResult0 = calculateRateStarsNumber(0);
    expect(expectedResult0).toBe(0);
    const expectedResult1 = calculateRateStarsNumber(0.1);
    expect(expectedResult1).toBe(0);
    const expectedResult2 = calculateRateStarsNumber(0.4);
    expect(expectedResult2).toBe(0);
  });
});
test('2) it should 0.5 if rate if lower than 1.5', () => {
  const expectedResult1 = calculateRateStarsNumber(0.5);
  expect(expectedResult1).toBe(0.5);
  const expectedResult2 = calculateRateStarsNumber(1.4);
  expect(expectedResult2).toBe(0.5);
});

test('3) it should 1 if rate if lower than 2.5', () => {
  const expectedResult1 = calculateRateStarsNumber(1.5);
  expect(expectedResult1).toBe(1);
  const expectedResult2 = calculateRateStarsNumber(2.4);
  expect(expectedResult2).toBe(1);
});

test('4) it should 1 if rate if higher than 9.5', () => {
  const expectedResult = calculateRateStarsNumber(9.5);
  expect(expectedResult).toBe(5);
});
