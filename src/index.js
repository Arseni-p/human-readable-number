module.exports = function toReadable (number) {
  let numPoint;
  let numStr = '';
  let gradation = '';
  let checkingNumber;
  
  let checkNumber = function(checking, number) {
    if ( number === 13 || number === 15 || number === 18 || number >= 20 && number <= 59 || number >= 80 && number <= 89) {
      switch(checking) {
        case 2:
          numPoint = 'twen';
          break;
        case 3:
          numPoint = 'thir';
          break;
        case 4:
          numPoint = 'for';
          break;
        case 5:
          numPoint = 'fif';
          break;
        case 8:
            numPoint = 'eigh';
            break;
        }
    } else {
      switch(checking) {
        case 1:
          numPoint = 'one';
          break;
        case 2:
          numPoint = 'two';
          break;
        case 3:
          numPoint = 'three';
          break;
        case 4:
          numPoint = 'four';
          break;
        case 5:
          numPoint = 'five';
          break;
        case 6:
          numPoint = 'six';
          break;
        case 7:
          numPoint = 'seven';
          break;
        case 8:
          numPoint = 'eight';
          break;
        case 9:
          numPoint = 'nine';
          break;
        case 10:
          numPoint = 'ten';
          break;
        case 11:
          numPoint = 'eleven';
          break;
        case 12:
          numPoint = 'twelve';
          break;
        }
      }
    }

  if (number === 0) return numStr = 'zero';  
      
  if ( number > 99 && number < 1000 ) {
    number % 100 == 0 ? gradation = 'hundred' : gradation = 'hundred ';
    checkingNumber = Math.floor(number/100);
    checkNumber(checkingNumber, number);
    numStr +=(numPoint + ' ' + gradation);
    number %=100;
  } 
      
  if ( number > 19 && number < 100 ) {
    number % 10 == 0 ? gradation = 'ty' : gradation = 'ty ';
    checkingNumber = Math.floor(number/10);
    checkNumber(checkingNumber, number);
    numStr +=(numPoint + gradation);
    number %=10;
  }
      
  if (number > 12 && number < 20) {
    gradation = 'teen';
    checkingNumber = number - 10;
    checkNumber(checkingNumber, number);
    numStr +=(numPoint + gradation);
  }
      
  if (number > 0 && number < 13) {
    checkingNumber = number;
    checkNumber(checkingNumber, number);
    numStr +=numPoint;
  }
  
  return numStr;
}

