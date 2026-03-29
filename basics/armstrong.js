// Check if a number is an Armstrong number
// Input: 153
// Output: Armstrong Number

let num = 153;
let original = num;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
}

if (original === sum) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong");
}
