let scores = prompt("점수를 입력하세요.");

let setAverage = scores.split(" ").map(Number);
console.log(setAverage);
let sum = 0;
for (let i = 0; i < setAverage.length; i++) {
  sum += Number(setAverage[i]);
  console.log(sum);
}

// for (let i=0; i<3; i++){
//     sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
//   }

let average = Math.floor(sum / setAverage.length);
console.log(average);
