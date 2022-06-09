var removeElement = function(nums, val) {
   let point1 = 0;
   let point2 = 0;
    while(point2 < nums.length) {
    
          if(nums[point2]!=val){
              nums[point1] = nums[point2];
              point1++;
          }

          point2++;

    }
    return point1;

};
let nums = [0,1,2,2,3,0,4,2]; //0,0,1,1,2,2,2,3,3,4
console.log(removeElement(nums, 2));