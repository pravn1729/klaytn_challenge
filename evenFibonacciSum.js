/*
 * Even Fibonacci Sum below n terms
 * Input: n
 */
function evenFibonacciSum(n) {
    if(n < 2) {
        return 0;
    }
    let f1=1; f2=2;
    let sum = 0;
    for(let i=2; i< n; i++) {
        let temp = f2;
        f2 = f1+f2;
        f1 = temp;
        if(f2 >= 4000000){
            return 0;
        }
        if(f1 % 2 == 0) {
            sum += f1;
        }
    }
    return sum;
}

module.exports = evenFibonacciSum;