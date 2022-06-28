
class TreeNode {

    constructor(val) {

        this.val = val;
        this.left = null;
        this.right = null;
        
    }
}

var sortedArrayToBST = function(nums) {
    
    var helper = function(l, r) {
        if(l > r) {
            return null;
        }
        const mid = parseInt((l + r) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = helper(l, mid - 1);
        root.right = helper(mid + 1, r);
        return root;
    }
    
    return helper(1, nums.length - 1);
    
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));