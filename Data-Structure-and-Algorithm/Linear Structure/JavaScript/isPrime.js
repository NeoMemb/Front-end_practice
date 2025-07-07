/**
 * @algorithm
 * function isPrime(n):
 * if n < 2:
 *      return false
 * for i = 2 to n-1:
 *      if n % i === 0:
 *          return false
 *   return true
 * @param {number} n 
 * @returns {boolean}
 */

function isPrime(n){
    if (n < 2){
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
