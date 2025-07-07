// Fibonacci using recursive method
function factorial(n){
    if (n === 0) return 1;
    return n * factorial(n-1);
}
for (let i = 1; i <= 10; i++) {
    console.log(`Factorial of ${i}: ${factorial(i)}`);
}