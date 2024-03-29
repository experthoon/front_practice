//es6에서는 class 기능이 추가 됨

class Student{

    //생성자.. 클래스명이 무조건 constructor
    constructor(name){
        this.name = name;
    }

    //멤버함수
    writeName(){
        console.log(`내이름은 ${this.name} 입니다`);
    }
}

//클래스 생성
let s1 = new Student("박떙땡");

console.log("이름: " + s1.name);
s1.writeName();

let s2 = new Student("홍길동");
console.log(`이름: ${s2.name}`);
s2.writeName();