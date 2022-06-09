
var removeDuplicates = function(nums) {
    
    if (nums. length === 0) return 0;
    let j = 0;
    let k = 0;
   for(let i = 0; i< nums.length; i++) {
        
       if(nums[i+1]===nums[j]){
           j++;
       } else {
           nums[k]= nums[j];
           j++;
           k++;
       }

   }

   return k;
};
let nums = [1,1,2]; //0,0,1,1,2,2,2,3,3,4
console.log(removeDuplicates(nums));

// const removeDuplicates = nums => {
//     if (nums. length === 0) return 0 
//     let i = 0; let j = 1; 
//     while ( j < nums.length) { 
//       if (nums [j] !== nums [i]) {
//           i++;
//          nums [i] = nums [j];
//          j++ ;
//   }  else j++
// }
//     return i + 1
// };

// let nums = [1,1,2];
// console.log(removeDuplicates(nums));
    