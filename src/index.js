module.exports = function toReadable (number) {
  let getNum = (n) => {
      switch (n) {
          case 0: return ''; break;
          case 1: return 'one'; break;
          case 2: return 'two'; break;
          case 3: return 'three'; break;
          case 4: return 'four'; break;
          case 5: return 'five'; break;
          case 6: return 'six'; break;
          case 7: return 'seven'; break;
          case 8: return 'eight'; break;
          case 9: return 'nine'; break;
      }
  }
  let getTeen = (n) => {
    switch (n) {
        case 10: return 'ten'; break;
        case 11: return 'eleven'; break;
        case 12: return 'twelve'; break;
        case 13: return 'thirteen'; break;
        case 14: return 'fourteen'; break;
        case 15: return 'fifteen'; break;
        case 16: return 'sixteen'; break;
        case 17: return 'seventeen'; break;
        case 18: return 'eighteen'; break;
        case 19: return 'nineteen'; break;
    }
  }
  let getTy = (n) => {
    switch (n) {        
        case 2: return 'twenty'; break;
        case 3: return 'thirty'; break;
        case 4: return 'forty'; break;
        case 5: return 'fifty'; break;
        case 6: return 'sixty'; break;
        case 7: return 'seventy'; break;
        case 8: return 'eighty'; break;
        case 9: return 'ninety'; break;
    }
  }
  let getTyTeenNum = (n) => {    
    if (n < 10) return getNum(n);
    if (n < 20) return getTeen(n);
    if (n < 100) return getTy(Math.floor(n/10)) + ((n % 10)===0 ? '' : ' ' + getNum(n % 10)); 
  }
  if (number === 0) return 'zero';
  if (number % 100 === 0) return  getNum(Math.floor(number/100)) + ' hundred';
  return (number < 100) ? getTyTeenNum(number) : getNum(Math.floor(number/100)) + ' hundred ' + getTyTeenNum(number % 100);  
}
