// Find missing number in array
// Input: [1, 2, 3, 5]
// Output: 4

let arr = [1, 2, 3, 5];

let n = arr.length + 1;
let expectedSum = n * (n + 1) / 2;
let actualSum = 0;

for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}

let missing = expectedSum - actualSum;

console.log(missing);
