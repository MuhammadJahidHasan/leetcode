// const formatResult = function(sum) {

//   let arr = [];

//   for(let i = 0; i < sum.length; i++) {
//       arr.push(parseInt(sum[i]));
//   }
//   return arr;

// }
// var plusOne = function(digits) {
 
//    let  digits1 = '';  
//    let digits2 = '1';
//    let sum = '';
//    let carry = 0;
//    let digitSum;
//    let temp;

// for(let i = 0; i<digits.length; i++) {
//      digits1+=digits[i].toString();
// }
// for(let i = 0; i<digits1.length; i++) {
//    let a = parseInt(digits1.charAt((digits1.length - 1) - i));
//    let b = parseInt(digits2.charAt((digits2.length - 1) - i));
//    b = b? b : 0;
//    console.log(a, b);
//    temp = (a+b+carry).toString();
//    digitSum = temp.charAt(temp.length - 1);
//    carry = parseInt(temp.substr(0, temp.length - 1));
//    carry = carry? carry : 0;
//    sum = (i === digits1.length - 1) ? temp + sum : digitSum + sum; 
// }
//   return formatResult(sum);

// };
var plusOne = function(digits) {
   for(var i = digits.length - 1; i >= 0; i--){
     if(++digits[i] > 9){
        digits[i] = 0;
     }
     else return digits;
   }
   console.log(digits.unshift(1));
   return digits;
 };

const re = plusOne([5,6]) //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
console.log(re);
