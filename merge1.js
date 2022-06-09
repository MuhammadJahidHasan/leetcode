

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

let newArr = merge([1,2,10], [1,2,3,5,15]);

console.log(newArr);