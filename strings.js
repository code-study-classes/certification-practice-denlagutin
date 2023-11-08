export function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (/[A-Z]/.test(char)) {
      count += 1;
    }
  }
  return count;
}

export function combineStrings(N1, N2, S1, S2) {
  const combinedString = S1.substring(0, N1) + S2.substring(S2.length - N2);
  return combinedString;
}

export function containsSubstring(S, S0) {
  return S.includes(S0);
}

export function replaceSubstring(S, S1, S2) {
  const index = S.indexOf(S1);
  if (index !== -1) {
    const prefix = S.substring(0, index);
    const suffix = S.substring(index + S1.length);
    return prefix + S2 + suffix;
  }
  return S;
}

export function countWordsWithSameLetters(sentence) {
  if (sentence.trim().length === 0) {
    return 0;
  }
  const words = sentence.split(' ');
  let count = 0;
  words.forEach((word) => {
    if (word.charAt(0).toLowerCase() === word.charAt(word.length - 1).toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

export function countWordsWithA(sentence) {
  const words = sentence.split(' ');
  let count = 0;
  words.forEach((word) => {
    if (word.toLowerCase().includes('a')) {
      count += 1;
    }
  });
  return count;
}

export function normalizeSpaces(sentence) {
  return sentence.trim().replace(/\s+/g, ' ');
}

export function extractFileName(fullFileName) {
  const fileNameWithExtension = fullFileName.split('/').pop();
  const fileName = fileNameWithExtension.split('.')[0];
  return fileName;
}

export function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (i % 2 === 0) {
      evenChars += sentence[i];
    } else {
      oddChars += sentence[i];
    }
  }
  const encryptedSentence = evenChars + oddChars.split('').reverse().join('');
  const reversedEncryptedSentence = encryptedSentence.split('').reverse().join('');
  return reversedEncryptedSentence;
}

export function checkBrackets(expression) {
  const stack = [];
  const stack1 = [];
  const stack2 = [];
  if (expression.trim().length === 0) {
    return 0;
  }
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === '(') {
      stack.push(i);
    } else if (expression[i] === ')') {
      if (stack.length === 0) {
        return i;
      }
      stack.pop();
    }
    if (expression[i] === '[') {
      stack1.push(i);
    } else if (expression[i] === ']') {
      if (stack1.length === 0) {
        return i;
      }
      stack1.pop();
    }
    if (expression[i] === '{') {
      stack2.push(i);
    } else if (expression[i] === '}') {
      if (stack2.length === 0) {
        return i;
      }
      stack2.pop();
    }
  }
  if (stack.length === 0 && stack1.length === 0 && stack2.length === 0) {
    return 0;
  }
  return -1;
}
