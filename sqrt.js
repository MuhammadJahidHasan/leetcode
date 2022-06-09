var mySqrt = function(x) {
   let low = 1;
   let high = parseInt(x/2);
   let mid;
   let ans;
   if(x === 1) {
    return 1;
   }
  else if(x === 0){
    return 0;
   }
   while(low <= high) {
       mid = parseInt((low+high)/2);

       if(mid*mid === x) {
           return mid;
       }
       else if(mid*mid < x) {
         low = mid + 1;
         ans = mid;
       }
       else {
           high = mid - 1;
       }
   } 

   return ans;
};

console.log(mySqrt(0));