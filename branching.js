/* eslint-disable indent */
export function incrementIfPositive(number) {
  if (number > 0) {
    return number + 1;
  }
  return number;
}

export function getIndexOfSmallerNumber(number1, number2) {
  if (number1 < number2) {
    return 1;
  } if (number2 < number1) {
    return 2;
  }
  return 1;
}

export function findMiddleNumber(number1, number2, number3) {
  // eslint-disable-next-line no-mixed-operators
  if (number1 >= number2 && number1 <= number3 || number1 <= number2 && number1 >= number3) {
    return number1;
  // eslint-disable-next-line no-mixed-operators
  } if (number2 >= number1 && number2 <= number3 || number2 <= number1 && number2 >= number3) {
    return number2;
  }
  return number3;
}

export function findUniqueNumber(number1, number2, number3, number4) {
  if (number1 !== number2 && number1 !== number3 && number1 !== number4) {
    return 1;
  } if (number2 !== number1 && number2 !== number3 && number2 !== number4) {
    return 2;
  } if (number3 !== number1 && number3 !== number2 && number3 !== number4) {
    return 3;
  }
  return 4;
}

export function calculateF(x) {
  if (x < 0) {
    return 0;
  } if (x % 2 >= 0 && x % 2 < 1) {
    return 1;
  }
  return -1;
}

export function describeNumber(n) {
  if (n < 10) {
    return 'нечетное однозначное число';
  } if (n < 100) {
    return n % 2 === 0 ? 'четное двузначное число' : 'нечетное двузначное число';
  } if (n <= 999) {
    return n % 2 === 0 ? 'четное трехзначное число' : 'нечетное трехзначное число';
  }
  return 'число не находится в диапазоне 1–999';
}

export function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day number.';
  }
}

export function convertToMeters(unitNumber, lengthInUnits) {
    let lengthInMeters;
    switch (unitNumber) {
      case 1:
        lengthInMeters = lengthInUnits * 0.1; // Дециметр в метр
        break;
      case 2:
        lengthInMeters = lengthInUnits * 1000; // Километр в метр
        break;
      case 3:
        lengthInMeters = lengthInUnits; // Метр в метр
        break;
      case 4:
        lengthInMeters = lengthInUnits * 0.001; // Миллиметр в метр
        break;
      case 5:
        lengthInMeters = lengthInUnits * 0.01; // Сантиметр в метр
        break;
      default:
        lengthInMeters = 'Invalid unit number.'; // Некорректный номер единицы длины
        break;
    }
    return lengthInMeters;
  }

// eslint-disable-next-line consistent-return
export function describeAge(age) {
    if (age === 20) {
      return 'двадцать лет';
    } if (age === 32) {
      return 'тридцать два года';
    } if (age === 41) {
      return 'сорок один год';
    } if (age === 56) {
      return 'пятьдесят шесть лет';
    } if (age === 69) {
      return 'шестьдесят девять лет';
    }
  }

export function describeNumber2(number) {
  let description = '';
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;
  // eslint-disable-next-line default-case
  switch (hundreds) {
    case 1:
      description += 'сто ';
      break;
    case 2:
      description += 'двести ';
      break;
    case 3:
      description += 'триста ';
      break;
    case 4:
      description += 'четыреста ';
      break;
    case 5:
      description += 'пятьсот ';
      break;
    case 6:
      description += 'шестьсот ';
      break;
    case 7:
      description += 'семьсот ';
      break;
    case 8:
      description += 'восемьсот ';
      break;
    case 9:
      description += 'девятьсот ';
      break;
  }
  // eslint-disable-next-line indent, default-case
    switch (tens) {
    case 2:
        description += 'двадцать ';
        break;
      case 3:
        description += 'тридцать ';
        break;
      case 4:
        description += 'сорок ';
        break;
      case 5:
        description += 'пятьдесят ';
        break;
      case 6:
        description += 'шестьдесят ';
        break;
      case 7:
        description += 'семьдесят ';
        break;
      case 8:
        description += 'восемьдесят ';
        break;
      case 9:
        description += 'девяносто ';
        break;
    }
    // eslint-disable-next-line default-case
    switch (units) {
      case 1:
        description += 'одиннадцать';
        break;
      case 2:
        description += 'два';
        break;
      case 3:
        description += 'три';
        break;
      case 4:
        description += 'четыре';
        break;
      case 5:
        description += 'пять';
        break;
      case 6:
        description += 'шесть';
        break;
      case 7:
        description += 'семь';
        break;
      case 8:
        description += 'восемь';
        break;
      case 9:
        // eslint-disable-next-line indent
        description += 'девять';
      break;
  }
  return description.trim();
}
