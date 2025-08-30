import { getRandomNumber } from '../getRandomNumber';

describe('getRandomNumber', () => {
  it('should return number within specified range', () => {
    for (let i = 0; i < 10; i++) {
      const result = getRandomNumber(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
