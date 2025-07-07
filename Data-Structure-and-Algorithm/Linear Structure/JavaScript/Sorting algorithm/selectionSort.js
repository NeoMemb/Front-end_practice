function selectionSort(array) {
    var i, j;
    const len = array.lenghth
    for (i = 0; i < len; i++) {
        var min = i;
        for (j = i + 1; j < len; j++) {

            if (array[j] < array[min]) {
                min = j;
            }
            
            [array[i], array[min]] = [array[min], array[i]];
        }
        // [array[i], array[min]] = [array[min], array[i]];
    }
}

let arrOfNumber = [9, 3, 2, 1, 5, 4, 14];
selectionSort(arrOfNumber);
console.log(arrOfNumber);