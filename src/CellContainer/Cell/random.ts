
export const generateRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * max) + min ;

export const generateRandomTime = () => ({
  milliseconds: generateRandomNumber(10, 100),
  minutes: generateRandomNumber(0, 2),
  seconds: generateRandomNumber(5, 30),
});
