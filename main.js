const mergeSort = (arr) => {
    if (arr.length === 0) return;
    if (arr.length === 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    
    return merge(mergeSort(left), mergeSort(right));
}

const merge(left, right) {
    const result = [];
    let iL = 0;
    let iR = 0;
    
    while (iL < left.length && iR < right.length) {
        if (left[iL] < right[iR]) {
            result.push(left[iL]);
            iL++;
        } else {
            result.push(right[iR]);
            iR++;
        }
    }
    while (iL < left.length) {
        result.push(left[iL]);
        iL++;
    }
    while (iR < right.length) {
        result.push(right[iR]);
        iL++;
    }
    
    return result;
}
