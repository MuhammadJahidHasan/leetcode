var addBinary = function(a, b) {

    let num1 = a.length;
    let num2 = b.length;
    let temp;
    if(num2 > num1) {
        temp = a;
        a = b;
        b = temp;
  }
  let sum = '';
  let digitSum;
  let carry = 0;
  let t = 0;

  for(let i = 0; i< a.length; i++) {
      let num1 = parseInt(a.charAt((a.length-1) - i));
      let num2 = parseInt(b.charAt((b.length-1) - i));
      num2 = num2? num2 : 0;
      carry = carry? carry : 0;
      if((num1 === 1 && num2 === 1) || (carry === 1 && num2 === 1) ||  (carry === 1 && num1 === 1)) {
         if(carry === 1 && num1 === 1 && num2 === 1) {
             digitSum = '1';
         } else 
           digitSum = '0';
         carry = 1;
      } else {
        digitSum = (num1+num2+carry).toString();
        carry = 0;
      }
      if(a.length === 1 &&(num1 === 1 && num2 === 1)){
         return carry+digitSum;
      }
     else if(a.length === 1) {
          return digitSum;
      }
      sum = digitSum + sum;
  }
  if(carry === 1)
     return '1'+sum;
   return sum;
};

const re = addBinary('0', '0');
console.log(re);
