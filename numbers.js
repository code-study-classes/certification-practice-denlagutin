export function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}

export function calculateSegmentProduct(A, B, C) {
  const distanceAC = Math.abs(C - A);
  const distanceBC = Math.abs(C - B);
  return distanceAC * distanceBC;
}

export function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

export function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

export function calculateDigitSum(twoDigitNumber) {
  const firstDigit = Math.floor(twoDigitNumber / 10);
  const secondDigit = twoDigitNumber % 10;
  const sum = firstDigit + secondDigit;
  return sum;
}

export function swapHundredsAndTens(threeDigitNumber) {
  if (typeof threeDigitNumber !== 'number' || threeDigitNumber < 100 || threeDigitNumber > 999) {
    return null;
  }
  const hundreds = Math.floor(threeDigitNumber / 100);
  const tens = Math.floor((threeDigitNumber % 100) / 10);
  const units = threeDigitNumber % 10;
  const newNumber = tens * 100 + hundreds * 10 + units;

  return newNumber;
}

export function getHundredsDigit(number) {
  if (typeof number !== 'number' || number <= 999) {
    return 0;
  }
  const hundredsDigit = Math.floor((number % 1000) / 100);
  return hundredsDigit;
}

export function getFullHours(seconds) {
  if (seconds === 0) {
    return 0;
  } if (seconds < 0 || seconds !== Math.floor(seconds)) {
    // eslint-disable-next-line no-undef
    return toThrow();
  }
  const hours = Math.floor(seconds / 3600);
  return hours;
}

export function getDayOfWeek(dayOfYear) {
  const firstDayOfWeek = 1;
  const daysPerWeek = 7;
  const remainder = (dayOfYear - 1) % daysPerWeek;
  let dayOfWeek = (firstDayOfWeek + remainder) % daysPerWeek;
  if (dayOfWeek < 0) {
    dayOfWeek += daysPerWeek;
  }
  return dayOfWeek;
}

export function countSquares(A, B, C) {
  const squaresInWidth = Math.floor(A / C);
  const squaresInLength = Math.floor(B / C);
  return squaresInWidth * squaresInLength;
}
