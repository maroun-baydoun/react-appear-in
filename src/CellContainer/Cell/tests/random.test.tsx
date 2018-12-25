import { generateRandomNumber, generateRandomTime } from '../random';

describe('random', () => {
  const originalMath = global.Math;
  const mockMath = Object.create(global.Math);
  beforeEach(() => {
    mockMath.random = jest.fn(() => 0.5);
    global.Math = mockMath;
  });

  afterAll(() => {
    global.Math = originalMath;
  });

  describe('generateRandomNumber', () => {
    it('calls Math.random and returns a random value', () => {
      const randomNumber = generateRandomNumber(1, 50);

      expect(mockMath.random).toBeCalled();
      expect(randomNumber).toBe(26);
    });
  });

  describe('generateRandomTime', () => {
    it('calls Math.random and returns three random values', () => {
      const { milliseconds, minutes, seconds } = generateRandomTime();

      expect(mockMath.random).toBeCalledTimes(3);
      expect(milliseconds).toBe(60);
      expect(minutes).toBe(1);
      expect(seconds).toBe(20);
    });
  });
});
