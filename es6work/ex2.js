//es6 문법 공부

/* var : 함수형변수
   let : 영역형변수(영역별로 다른메모리 갖는다)
*/

var a = 1;
let b = 2;

function myfunction(){
    var a = 3; // 7번행과 전혀 다른 변수
    let b = 4; // 8행과 다른 변수

    if(true){
        var a = 5;
        let b = 6;

        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);
}

myfunction();
console.log(a); //전역변수 출력1
console.log(b); //전역변수 출력2