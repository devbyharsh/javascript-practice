// Remove duplicates from array
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

let arr = [1, 2, 2, 3, 4, 4];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
