      'use strict'

//      function binary_search(low, high, nums, target) {

//       let mid = parseInt((low+high)/2);
     

//       if (low > high) {
       
//           return mid+1;
//       }

//       else if(nums[mid] === target) {

//           return mid;
//       }

//       else if (nums[mid] > target) {
//          return binary_search(low, mid-1, nums, target);
//       }

//       else if(nums[mid] < target) {
//          return binary_search(mid+1, high, nums, target);
//       }

// }

function binary_search(low, high, nums, target) {
          
        while(low <= high) {
            let mid = parseInt((low+high)/2);
           
            if(nums[mid]===target) {
                return mid;
            }
            else if(nums[mid] > target) {
                high = mid-1;
            }
            else {
                low = mid+1;
            }
        }

         console.log(low, high, midd);

        return high+1;
}   



var searchInsert = function(nums, target) {
    
    let low = 0;
    let high = parseInt((nums.length) - 1);
    let result = binary_search(low,high,nums,target);
    console.log(result);
}

// let result = binary_search(1,5,[1,2,3,4,5],5);
// console.log(result);

searchInsert([-1,3,5,6], 0);

