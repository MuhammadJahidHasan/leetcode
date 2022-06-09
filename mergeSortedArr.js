

// const merge = function(nums1, m, nums2, n  ) {

//     // let m = nums1.length;
//     // let n = nums2.length;

//     let arr = [];

//     let i = 0, j = 0, k = 0;
    
//     while(i < m && j < n) {
//         if(nums1[i] <= nums2[j]) {
//             arr[k] = nums1[i];
//             i++;
//         } else {
//             arr[k] = nums2[j];
//             j++;
//         }
//         k++;
//     }

//     while(i < m) {
//         arr[k] = nums1[i];
//         i++;
//         k++;
//     }

//     while(j < n) {
//         arr[k] = nums2[j];
//         j++;
//         k++;
//     }

//     for(let a = 0; a < arr.length; a++) {
//         nums1[a] = arr[a];
//     }
//     return nums1;
// };


const merge = function(nums1, m, nums2, n  ) {

    let last = (m + n) - 1;

    while(m > 0 && n > 0) {
        if(nums1[m -1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m --;
        } else {
            nums1[last] = nums2[n - 1];
            n --;
        }
        last --;
    }

    while(n > 0) {
         nums1[last] = nums2[n - 1];
         last --; n--;
    }

    return nums1;
};

let newArr = merge([1,2,3,0,0,0], 3, [0,1,2,5,6], 5);

console.log(newArr);