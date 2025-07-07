/**
 * @description
 * To Check if a number, n, is a power of two ( i.e 2 ^ n )
 * Given n = 8
 * 8/2 = 4 (reminder = 0)
 * 4/2 = 2 (reminder = 0)
 * 2/2 = 1 (reminder = 0)
 * then return true
 * 
 * @algorithm
 * Let do it kind of recursively
 * while (n > 1):
 *   If n % 2 !== 0:
 *     return false
 *   n /= 2
 *   return true
 */
function isPowerOfTwo(n){
    // For edgde cases
    // 1 is not a power of two
    if (n <= 1) return false;

    // while (n > 1){
    //     if (n % 2 !== 0){
    //         return false
    //     }
    //     n /= 2;
    // }
    // return true;

    // Bitwise operation also works as well
    // e.g 2 10, 3 = 11, 4 = 100, 5 = 101, 6 = 110, 7 = 111, 8 = 1000, 9 = 1001
    // E.g 5 = 101
    //     4 = 100
    // 5 & 4 = 100 
    //     8 = 1000
    //     7 =  111
    // 8 & 7 = 0000

    // It's surprising that this pattern also work, who would have thought of it...
    return ((n & (n-1)) === 0);
}

// Let test it...

for (let i = 1; i <= 10; i++) {
    console.log(`Is ${i} a primeNumber 🤔?`, isPowerOfTwo(i));
}