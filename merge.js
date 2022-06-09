

const merge = function(arr, l, r, m ) {

    let n1 = (m - l) + 1;
    let n2 = r - m;

    let arr1 = new Array(n1);
    let arr2 = new Array(n2);

    for(let i = 0; i < n1; i++) {
        arr1[i] = arr[l + i];
    }

    for(let j = 0; j < n2; j++) {
        arr2[j] = arr[(m + 1) + j];
    }

    let i = 0, j = 0, k = l;
    
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
    
};


const mergeSort = function(arr, l, r) {

    if(l >= r) {
        return;
    }
    let m = parseInt((l + r) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, r, m);
};

let arr = [8, 5, 7, 9, 6, 10];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);