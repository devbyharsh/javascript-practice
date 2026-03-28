// Find second largest number in array
// Input: [3, 7, 2, 9, 5]
// Output: 7

let arr = [3, 7, 2, 9, 5];

let max = -Infinity;
let secMax = -Infinity;

for(let i = 0 ; i < arr.length ; i++){
    if(max < arr[i]){
        secMax = max;
        max = arr[i]
    }else if (arr[i] > secMax && arr[i] < max) {
        secMax = arr[i]
    }
}  

console.log(secMax);
