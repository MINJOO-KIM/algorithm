function circle(radius) {
  let area = radius * radius * 3.14;
  return area;
}
let radius = prompt("반지름의 길이를 입력하세요.");
console.log(circle(radius));
