// Count number of digits
// Input: 1234
// Output: 4

let num = 1234;
let count = 0;

if (num === 0) {
    count = 1;
} else {
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
}

console.log(count);
