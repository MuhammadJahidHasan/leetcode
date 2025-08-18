
const threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let k = nums.length - 1;
        const target = -nums[i]
        while (j < k) {
            const currentSum = nums[j] + nums[k];
            if (currentSum === target) {
                result.push([nums[i], nums[j], nums[k]]);

                while (j < k && nums[j] === nums[j+1]) {
                    j++;
                }

                 while (j < k && nums[k] === nums[k-1]) {
                    k--;
                }
                j++;
                k--;
            } else if (currentSum < target ) {
                 j++;
            } else {
                k--
            }

        }

    }

    return result;
};