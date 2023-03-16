let numbers = prompt("두 숫자를 입력하세요.");
let numArr = numbers.split(" ");

let share = numArr[0] / numArr[1];
let remainder = numArr[0] % numArr[1];

console.log(share, remainder);
