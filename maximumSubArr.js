
var maxSubArray = function(nums) {
    let finalSum = -9999999999;
    let maxSum = nums[0];
    for(let i = 1; i <= nums.length; i++) {
           if(maxSum > finalSum) {
               finalSum = maxSum;
           }
          // console.log(maxSum);
           if(maxSum+nums[i] > nums[i]){
               maxSum = maxSum+nums[i];
           } else {
               maxSum = nums[i];
           }
    }
    return finalSum;
};



let re = maxSubArray([5,4,-1,7,8]);
console.log(re);