function countingSort(arr) {
    var max = Math.max(...arr)
    var min = Math.min(...arr)

    var i, z = 0, count = [];
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}