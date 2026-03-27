// Find the sum of digits
// Input: 1234
// Output: 10

let num = 1234;
let sum = 0;

while(num > 0){
    let lastDigit = num % 10;
    sum = sum + lastDigit;
    num = Math.floor(num / 10);
}
console.log(sum);
