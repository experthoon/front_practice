//비교연산자

let a = 6;
let b ="6";

console.log(a==b); //true
console.log(a===b); //false
console.log(Object.is(a,b)); // ===쓰는것과 동일

console.log(`a의 타입은 ${typeof(a)}입니다`);
console.log(`b의 타입은 ${typeof(b)}입니다`);