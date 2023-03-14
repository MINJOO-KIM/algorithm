let string = prompt("문장을 입력해주세요.");
let newString = string.split("").reverse().join("");

console.log(newString);

// function reverseString(string) {
//   let newString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }
//   return newString;
// }

// console.log(reverseString("거꾸로"));
