const NUMBERS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};


module.exports = function toReadable (number) {
  if (NUMBERS[number]) {
    return NUMBERS[number];
  }

  const hundreds = Math.floor(number / 100);
  let dozens = Math.floor(number / 10);
  
  if (number % 100 === 0) {
    return `${NUMBERS[hundreds]} hundred`;
  }
  
  // if number > 100
  if (hundreds >= 1) {
    dozens = dozens % 10;
    const tenRemainder = number % 100;
    const remainder = number % 10;    

    if (tenRemainder % 10 === 0) {
      return `${NUMBERS[hundreds]} hundred ${NUMBERS[tenRemainder]}`; // like 790
    }

    if (NUMBERS[tenRemainder]) {
      return `${NUMBERS[hundreds]} hundred ${NUMBERS[tenRemainder]}`;
    }

    if (dozens === 0) {
      return `${NUMBERS[hundreds]} hundred ${NUMBERS[remainder]}`;  // like 705
    }

    return `${NUMBERS[hundreds]} hundred ${NUMBERS[dozens * 10]} ${NUMBERS[remainder]}`; // like 715
  }
  
  // if number < 100
  const remainder = number % 10;
  return `${NUMBERS[dozens * 10]} ${NUMBERS[remainder]}`;
}
