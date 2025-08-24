var containsDuplicate = function(nums) {
    const duplicateSet = new Set();
    for (let i = 0; i < nums.length; i++) {
         duplicateSet.add(nums[i])
    }

	if (duplicateSet.size === nums.length) {
		return false;
	}

    return true;
    
};