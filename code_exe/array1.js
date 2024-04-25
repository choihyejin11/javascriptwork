// ctrl + alt + n  (live server 대신해서 아래 출력보이는거..)
// 명사명사 뒤에 명사 앞에 대문자

const { init } = require("create-react-app/createReactApp");

console.log("test");

function arrayLesson1() {
  console.log("function 말하다");
}
console.log("말하다");
console.log(arrayLesson1());
//javascript/java
//javascript : 문법
//java : 문법
//react : es6

//변수선언
//javascript는 변수선언을 하면 자동으로 under fined(아무것도 없다)가 붙는다
var print;
console.log(print);

console.log("===============");

//ctrl +shift+f 자동정렬
//모든 객체지향언어는 같다 // 배열은 index 0부터 시작한다
function oneArray() {
  var array = [1, 2, 3, 4, 5];

  for (let i = 0; i < 5; i++) {
    console.log(array[i]);
  }
}
console.log(oneArray());

console.log("===============");

//function j304Ex1()
//for 1~~11 1차원 배열로 출력

function j304Ex1() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  for (let i = 0; i < 11; i++) {
    console.log(array[i]);
  }
}

console.log(j304Ex1());

//2~13까지 출력
//1차원 배열 : 괄호하나 []

function oneArray2() {
  var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  //array.length : 엘리먼트(element)요소
  //문자열 변수는 연결은 + 한다(공통)
  console.log("배열의 길이는" + array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

console.log(oneArray2());

function oneArray3() {
  //입력을 받는데 어느정도 받는지모른다 그래서 []
  var array = [];
  var init = 0;
  for (var i = 0; i < 9; i++) {
    array[i] = ++init;
    console.log(array[i]);
  }
}
console.log(oneArray3());

//1~10 입력 출력 oneArray4 로 만들기

function oneArray4() {
  var array = []; //배열방을 만든다
  var init = 0; // 방에 처음들어갈 순번
  for (var i = 0; i < 10; i++) {
    array[i] = ++init; //행위..점점 증가하도록
    console.log(array[i]); // 1,2,...
  }
}
console.log(oneArray4()); // 만든 함수 불러오기

//5~10까지 입력
//배열을 만든다.
//증감하도록 for문 만든다.

function oneArray5() {
  var init = 4;
  var array = [];
  for (let i = 0; i < 6; i++) {
    array[i] = ++init;
    console.log(array[i]);
  }
}
console.log(oneArray5());

//3~12까지 입력하고 출력
function oneArray6() {
  var init = 2;
  var array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = ++init;
    console.log(array[i]);
  }
}
console.log(oneArray6());

//1~10 합을 출력 var array[1,2,...10]
//1~10 입력하고 합을 출력 var array[]

console.log("==============");

function OneArray7() {
  var array = [];
  var init = 0;

  for (let i = 0; i < 10; i++) {
    array[i] = ++init;
    console.log(array[i]);
  }
}
console.log(OneArray7());

console.log("==============");

function sum() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += array[i];
    console.log(sum);
  }
}
// console.log(sum());
