let name = "김병훈";
let birth = 1996;
let food = '삼겹살';

let curYear = new Date().getFullYear();

//예전 출력 방식
let result = "이름: " + name + "\n태어난 연도: " + birth + "\n나이: " + (curYear-birth) + "\n좋아하는 음식: " + food;

console.log(result);

//리터럴방식출력 : 중간변수 $
let result2 = `이름: ${name}
태어난 연도 : ${birth}
나이 : ${curYear-birth}
좋아하는 음식: ${food}`

console.log(result2);