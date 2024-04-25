function twoArray1() {
  //2차원배열은 행열
  var array = [
    //0열,1열,2열
    [1, 2, 3], //0행
    [4, 5, 6], //1행
    [7, 8, 9],
  ]; //2행

  var i = 0;
  var x = 0;

  //for 행
  //   for 열

  for (var i = 0; i < 3; i++) {
    for (var x = 0; x < 3; x++) {
      console.log(array[i][x]);
    }
  }
}
console.log(twoArray1());

//1행 1,2,3
//2행 4,5,6   2차원배열로 출력하시오
//1~6 합을 구하시오
function twoArray2() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  var i = 0;
  var x = 0;
  var sum = 0;

  for (var i = 0; i < 2; i++) {
    for (var x = 0; x < 3; x++) {
      sum += array[i][x];
      console.log(array[i][x]);

      // sum += array[i][x];
    }
  }
  return sum;
}
console.log(twoArray2());

//1~12을 2차원배열을 써서 총합을 구하고 짝수의합 홀수의합

function twoArray3() {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  let i = 0;
  let j = 0;
  let one_sum = 0;
  let two_sum = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i][j];

    for (let j = 0; j < array.length; j++) {
      if (array[i][j] % 2 == 0) {
        two_sum += array[i][j];
      } else if (!array[i][j] % 2 == 0) {
        one_sum += array[i][j];
      }
    }
  }

  return "짝수의합:" + two_sum + "홀수의합:" + one_sum + "총합:" + sum;
  // console.log('홀수의합은:' + one_sum);
  // console.log('짝수의합은:' + two_sum);
  // console.log('총합은:' + sum);
}

console.log(twoArray3());

function Varvalue() {
  //var:es5 2009 변수명을 다시 선언할 수 있다 es5만의 api가 있다
  //let:es6 2015 다시 선언할 수 없다 es6 api react

  //var nema선언할 수 있다
  var name = "아무개";
  var name = "홍길동";

  console.log(name);

  //let 변수명을 다시 선언할 수 없다
  // let address = 한국;
  // let address = 미국;
}
console.log(Varvalue());

//1,2,3 4,5,6 7,8,9 입력하고 출력하시오
// console.log("===============");

// function twoArray4() {
//   let array = [];
//   let i = 0;
//   let x = 0;
//   let init = 0;

//   for (let i = 0; i < array.length; i++) {
//     array[i] = [];
//     for (let x = 0; x < array.length; x++) {
//       array[i][x] = ++init;
//     }
//     return array[i][x];
//   }
// }
// console.log(twoArray4());

// console.log("===============");

//1,2,3,4,5
//6,7,8,9,10
//11,12,13,14,15

//2차원 배열로 입력하고 출력하시오
//합을 구하시오

function twoArray5() {
  let i = 0;
  let x = 0;
  let sum = 0;
  let init = 0;
  let array = [];

  for (let i = 0; i < 3; i++) {
    array[i] = [];   

    for (let x = 0; x < 5; x++) {
      
      array[i][x] = ++init;
      
      // console.log(array[i][x]);

   
      // sum = sum + array[i][x];

     if(array[i][x]%2==0){
      two_sum = two_sum + array[i][x];
     } else one_sum = one_sum + array[i][x];
    }
  }

  return '짝수의합' + two_sum + '홀수의합' + one_sum + '총합' + sum;
}
 console.log(twoArray5());

// function Example(){
//   console.log("First");
//   console.log("SEcond");
//   console.log("Third");
//   return "Exit";
// }
// console.log(Example()); //Example()의 행동을 수행한 이후-> return값을 출력하겠따!! 