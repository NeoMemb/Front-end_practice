/**
 * @param {int} array
 * @description - It sorts an array of number, by comparing 
 * the last and the second to the last.
 */
function bubbleSort(array) {
    const len = array.length;
    let i;

    for (i = 0; i < len; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

// Let test it...

let numb = [2, 10.2, 5, 9, 1, 2, 8];
console.log(numb);
bubbleSort(numb);
console.log(numb);