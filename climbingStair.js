

const factorial = function(number) {
     
    let sum = 1;
    for(let i = number; i > 0; i--) {
        sum*= i;
    }

    return sum;

}

const calculateResult = function(value, oneCount, twoCount) {

    let re1 = factorial(value); 
    let re2 = factorial(oneCount);
    let re3 = factorial(twoCount);
    let final = re1/(re2*re3);
    return final;

}

//var climbStairs = function(n) {

    // let length, flag = 0, result = 0, oneCount = 0, twoCount = 0;
    // oneCount = n;
    // twoCount = 0;
    // if(n % 2 == 0) {
    //    length = (n / 2) - 1;
    //    flag = 1;                                                                                                                            
    // } else {
    //    length = parseInt(n /2);
    // }

    // for(let i = 1; i <= length; i++) {
    //     oneCount-=2;
    //    result+= calculateResult(--n, oneCount, ++twoCount);
    // }

    // if(flag == 1) {
    //     result+=2;
    // } else {
    //     result+=1;
    // }

    // console.log(result);

//};

// var climbStairs = function(n) {

//     let arr = [];
//     arr[1] = 1;
//     arr[2] = 2
//     for(let i = 3; i <=n; i++) {
//        arr[i] = arr[i-1] + arr[i-2];
//     }

//     return arr[n];

// };

var climbStairs = function(n) {

    let one = 1, two = 1;

    for(let i = 0; i < n-1; i++) {
       let temp = one;
       one = two + one;
       two = temp; 
    }

    return one;

};

console.log(climbStairs(6));
