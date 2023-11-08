export function sumOfSquares(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i += 1) {
    sum += i * i;
  }
  return sum;
}

export function power(A, N) {
  let result = 1;
  for (let i = 1; i <= N; i += 1) {
    result *= A;
  }
  return result;
}

export function factorialProduct(N) {
  let product = 1;
  for (let i = 1; i <= N; i += 1) {
    product *= i;
  }
  return product;
}

export function fibonacciSequence(N) {
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= N; i += 1) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

export function sumOfPowers(N) {
  let sum = 0;
  for (let i = 1; i <= N; i += 1) {
    // eslint-disable-next-line no-shadow
    const power = i ** i;
    sum += power;
  }
  return sum;
}

export function remainingLength(A, B) {
  let remaining = A;
  while (remaining >= B) {
    remaining -= B;
  }
  return remaining;
}

export function findExponent(N) {
  let exponent = 0;
  // eslint-disable-next-line no-shadow
  let power = 1;
  while (power < N) {
    exponent += 1;
    power *= 2;
  }
  return exponent;
}

export function findMinKAndSum(N) {
  let k = 1;
  let sum = 0;
  while (sum < N) {
    sum += k;
    k += 1;
  }
  return k - 1;
}

export function calculateGCD(A, B) {
  while (B !== 0) {
    const remainder = A % B;
    // eslint-disable-next-line no-param-reassign
    A = B;
    // eslint-disable-next-line no-param-reassign
    B = remainder;
  }
  return A;
}

export function findFibonacciIndex(N) {
  let previous = 0;
  let current = 1;
  let index = 1;
  while (current !== N) {
    const next = previous + current;
    previous = current;
    current = next;
    index += 1;
  }
  return index;
}
