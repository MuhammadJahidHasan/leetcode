
const merge = function(arr1, arr2  ) {

    let n1 = arr1.length;
    let n2 = arr2.length;

    let arr = [];

    let i = 0, j = 0, k = 0;
    
    while(i < n1 && j < n2) {
        if(arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    while(i < n1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while(j < n2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
    return arr;
};

var findMedianSortedArrays = function(nums1, nums2) {

    let newArr = merge(nums1, nums2);

    let median = 0;
     let point = 0;
console.log(`length = ${newArr.length}`);
if((newArr.length) % 2 == 0 ){

   point = parseInt(((newArr.length)/2)) ;
   median = (newArr[point]+ newArr[point-1])/2;

}
else {
     point = parseInt(((newArr.length)/2));
     median = newArr[point];
   }
   return median;  
};

console.log(findMedianSortedArrays([1,2], [3,4]));


