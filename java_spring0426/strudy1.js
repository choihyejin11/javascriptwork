// // <!--
// // // 변수: 변하는 수
// // //오른쪽에서 왼쪼긍로 값이 이동한다
// // //문자열 타입(tape)
// // //var타입은 janasctipt에서는 모드 타입을 받을 수 있다
// // //Object / -->

// function Var3() {
//   //++변수 : 변수만나면 +1
//   var init = 0;
//   console.log(init); //0
//   console.log(++init); //1
//   console.log(++init); //2

//   //변수++ : 변수를 2번만나면 +1

//   init = 0;
//   console.log(init); //0
//   console.log(init++); //0
//   console.log(init); //1
// }
// console.log(Var3());

// function If1() {
//   //  if (true) {
//   //   true 실행
//   //  }else{
//   //   flase 실행
//   //  }
//   var age = 40;
//   if (age < 50) {
//     console.log("true" + age);
//   } else {
//     console.log("false" + age);
//   }
// }
// console.log(If1());

// function If2() {
//   var one = 10;
//   var two = 20;

//   if (one <= two) {
//     console.log(true);
//   }

//   if (one >= two) {
//     console.log(true);
//   }

//   if (one == two) {
//     console.log(true);
//   }
// }
// console.log(If2());

// function If3() {
//   var one = 10;
//   var two = 20;

//   // else if : 하나라도 true면 해당하는 괄호만 실행하고 나간다

//   if (one == two) {
//     console.log("같다"); //F
//   } else if (one <= two) {
//     console.log("two가 더 크다"); //T
//   } else if (one >= two) {
//     console.log("one이 더 크다"); //F
// //   }
// // }
// // console.log(If3());

// function Switch() {
//   var choice = 2;

//   switch (choice) {
//     case 1:
//       console.log(1); break;
//     case 2:
//       console.log(2);
//     case 3:
//       console.log(3);

//     default:
//       console.log("찾는값이 없습니다");
//   }
// }
// console.log('출력');
// console.log(Switch());

// function If4() {
//&& : a && b -> 둘다 true 이면 ture 나머지는 false
//a||b : 둘중 하나라도 true 이면 true (or개념) 나머지는 false

//   var one = 10;
//   var two = 10;

//   if (one <= two && two == one) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// console.log(If4());

// function If5() {
//   var one = 10;
//   var two = 20;

//   if ((one <= two || one == two)) {
//     console.log(true);
//   }
//   if ((one >= two || one == two)) {
// //     console.log(true);
// //   } else {
// //     console.log(false);
// //   }
// // }
// // console.log(If5());

function For1() {
  //1~10 출력
  var sum = 0;
  for (var i = 1; i <= 10; i++) {  
  return sum;
}
}
console.log(For1());

// function While1(){
// //1~10
// var init = 0;
// //while은 무한루프 주의
// while (++init<=10){
//   console.log(init);

// }

// }
// console.log(While1());

// function DoWhile(){
//   //무조건 do 한번 실행하고 나서 조건식 true면 실행
//   //0~10까지 합을 구할때 편함
//  do{

//  } while (++init=0);

// }

// //3~11 for문, while문, dowhile문 출력
// console.log("===for==");
// var sum = 0;
// var i = 0;
// for (var i = 0; i <= 10; i++) {
//   sum = sum + 1;

// }
// return sum;

// console.log("===while==");

// var i = 3;
// while (i <= 11) {
//   // ++i;
//   console.log(i);
//   ++i;
// }

// console.log("=== do while==");

// var init = 3;
// do {
//   console.log(init);
// } while (++init <= 11);
