/*
 * Sum of all multiples of 3 or 5 below n
 * Input: n
 */
function sumOfAllMultiplesOf3Or5(n) {
    let x = 3;
    let y = 5;

    if(n < x) {
        return 0;
    }
    // Calculating multiples of 3, 5 and combined
    let multiplesOfX = parseInt((n-1)/x);
    let multiplesOfY = parseInt((n-1)/y);
    let multiplesOfXY = parseInt((n-1)/(x*y));

    // Calculating Sum of each multiple and combined
    let sumOfMultiplesOfX = (3*multiplesOfX*(multiplesOfX+1)/2);
    let sumOfMultiplesOfY = (5*multiplesOfY*(multiplesOfY+1)/2);
    let sumOfMultiplesOfXY = ((x*y)*multiplesOfXY*(multiplesOfXY+1)/2);

    return sumOfMultiplesOfX+sumOfMultiplesOfY-sumOfMultiplesOfXY;
}

module.exports = sumOfAllMultiplesOf3Or5;




