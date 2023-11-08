export function isPositive(A) {
  return A > 0;
}

export function isOdd(A) {
  return A % 2 !== 0;
}

export function checkInequality(A, B) {
  return A > 2 && B <= 3;
}

export function checkInequality2(A, B) {
  return A >= 0 || B < -2;
}

export function checkBetweenNumbers(A, B, C) {
  return A < B && B < C;
}

export function checkOddThreeDigitNumber(number) {
  return Math.abs(number) >= 100 && Math.abs(number) <= 999 && Math.abs(number) % 2 !== 0;
}

export function checkUniqueDigits(number) {
  const digits = String(number).split('');
  const uniqueDigits = new Set(digits);
  if (digits.length < 2) {
    return false;
  }
  return digits.length === uniqueDigits.size;
}

export function isSecondQuadrant(x, y) {
  return x < 0 && y > 0;
}

export function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  return a === b || a === c || b === c;
}

export function areSameColorFields(x1, y1, x2, y2) {
  const isSameColor = (x, y) => (x + y) % 2 === 0;
  return isSameColor(x1, y1) === isSameColor(x2, y2);
}
