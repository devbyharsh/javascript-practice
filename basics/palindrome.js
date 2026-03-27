// Check if a number is palindrome
// Input: 121
// Output: Palindrome

let num = 121;
let original = num
let reversed = 0;

while(num > 0){
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);

    
}

if(original === reversed){
    console.log("The number is palindrome number"); 
}else{
    console.log("The number is Not palindrome number");
}
