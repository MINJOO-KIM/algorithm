let inputNumber = prompt("두 숫자를 입력해주세요.");
let numbers = inputNumber.split(" ").map(Number);

let square = numbers[0] ** numbers[1];
console.log(square);
